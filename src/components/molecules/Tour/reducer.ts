import { TourState, ActionType, buildReducerType } from "./Tour.types";

export const buildReducer = ({ onUpdateStep }: buildReducerType) => {
    const types = {
        RESTORE_AT: "RESTORE_AT",
        TOUR_EVENT: "TOUR_EVENT",
        SET_TOUR_STEP: "SET_TOUR_STEP",
        DETOUR: "DETOUR",
    };
    const reducer = (state: TourState, action: ActionType): TourState => {
        const { type, payload } = action;
        let reducedState = state;
        if (type === types.SET_TOUR_STEP) {
            reducedState = { ...reducedState, tourState: payload };
        } else if (type === types.RESTORE_AT) {
            reducedState = payload;
        } else if (type === types.DETOUR) {
            const { steps: detourSteps, exit } = payload;
            const activeStepIndex = state.tourState.index;
            const exitStepIndex = state.tourSteps
                .map(step => step.id)
                .indexOf(exit);

            reducedState = {
                tourState: {
                    ...detourSteps[0],
                    index: state.tourState.index + 1,
                },
                tourSteps: [
                    ...state.tourSteps.slice(0, activeStepIndex),
                    ...detourSteps,
                    ...state.tourSteps.slice(exitStepIndex),
                ],
            };
        } else if (type === types.TOUR_EVENT) {
            const stepId = payload;
            const stepIndex = state.tourSteps
                .map(step => step.id)
                .indexOf(stepId);
            if (stepIndex < 0) {
                //! Nothing found
                console.debug("Unrecognized tour event step - ", stepId);
            } else if (stepIndex === 0) {
                //! First step
                reducedState = {
                    ...state,
                    tourState: {
                        id: stepId,
                        index: stepIndex,
                    },
                };
            } else if (
                payload &&
                payload.steps &&
                stepIndex === payload.steps.length - 1
            ) {
                // Last step
                reducedState = {
                    ...state,
                    tourState: { id: "COMPLETED", index: stepIndex },
                };
            } else {
                const previousStep = state.tourSteps[stepIndex - 1];
                if (state.tourState.id === previousStep.id) {
                    reducedState = {
                        ...state,
                        tourState: {
                            id: stepId,
                            index: stepIndex,
                        },
                    };
                }
            }
        }

        onUpdateStep(reducedState);

        return reducedState;
    };

    return { reducer, types };
};
