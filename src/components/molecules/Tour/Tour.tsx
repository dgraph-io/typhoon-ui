/** @jsx jsx */
import React, { useContext, useEffect, useReducer } from "react";
import { jsx } from "@emotion/react";

import { ThemeProvider } from "hooks/useTheme";
import { Modal, Text, Floater } from "components";
import { tourFloaterTheme, tourTheme } from "./Tour.styles";
import { buildReducer } from "./reducer";
import { noop } from "helpers/utils";
import {
    TourElementPropsType,
    TourPropsType,
    TourContextPropsType,
    TourState,
    DetourType,
} from "./Tour.types";

export const TourContext = React.createContext({
    tourState: { id: "" },
    dispatchTourEvent: noop,
    setTourStep: noop,
    setDetour: noop,
    restartTourAt: noop,
    tourSteps: [],
} as TourContextPropsType);

const TourModal = () => {
    const { tourState, setTourStep, tourSteps, setDetour } = useContext(
        TourContext
    );

    const activeSteps = tourSteps.filter(step => step.id === tourState.id);

    if (activeSteps.length > 0 && activeSteps[0].type === "modal") {
        const activeStep = activeSteps[0];
        return (
            <ThemeProvider value={tourTheme}>
                <Modal
                    continueLabel={activeStep.data.continueLabel || "Next"}
                    hideCloseButton={!activeStep.data.detour}
                    closeLabel={activeStep.data.closeLabel}
                    onClose={setDetour.bind(null, activeStep.data.detour)}
                    isOpen={true}
                    heading={activeStep.data.heading}
                    onContinue={setTourStep.bind(null, activeStep.data.trigger)}
                    disableEscape={true}
                    disableOverlay={true}
                >
                    {typeof activeStep.data.content === "string" ? (
                        <Text color="white" weight={600}>
                            {activeStep.data.content}
                        </Text>
                    ) : (
                        activeStep.data.content
                    )}
                </Modal>
            </ThemeProvider>
        );
    }

    return <Modal isOpen={false} />;
};

const getStateFromLocalStorage = (key: string | null, defaultValue: any) => {
    try {
        // @ts-ignore
        const value = JSON.parse(window.localStorage.getItem(key));
        return value || defaultValue;
    } catch (err) {
        return defaultValue;
    }
};

const Tour = ({ steps = [], tourId, children }: TourPropsType) => {
    const onUpdateStep = (state: TourState) => {
        window.localStorage.setItem(tourId, JSON.stringify(state));
    };

    const start = steps[0];

    const { reducer, types } = buildReducer({
        steps,
        onUpdateStep,
    });

    const [tour, dispatch] = useReducer(reducer, {
        tourState: start,
        tourSteps: steps,
    });
    const { tourState, tourSteps } = tour;

    const dispatchTourEvent = (event: string) => {
        dispatch({
            type: types.TOUR_EVENT,
            payload: event,
        });
    };

    const setTourStep = (id: string) => {
        dispatch({
            type: types.SET_TOUR_STEP,
            payload: {
                id,
                index: tourSteps.map(step => step.id).indexOf(id),
            },
        });
    };

    const setDetour = (detour: DetourType) => {
        dispatch({
            type: types.DETOUR,
            payload: detour,
        });
    };

    const restartTourAt = (id: string) => {
        dispatch({
            type: types.RESTORE_AT,
            payload: {
                tourState: {
                    id,
                    index: tourSteps.map(step => step.id).indexOf(id),
                },
                tourSteps: steps,
            },
        });
    };
    useEffect(() => {
        const storedState = getStateFromLocalStorage(tourId, {
            tourState: start,
            tourSteps: steps,
        });
        dispatch({
            type: types.RESTORE_AT,
            payload: storedState,
        });
    }, [tourId, start, steps, types.RESTORE_AT]);

    return (
        <TourContext.Provider
            value={{
                tourSteps,
                tourState,
                dispatchTourEvent,
                setTourStep,
                setDetour,
                restartTourAt,
            }}
        >
            {children}
            <TourModal />
        </TourContext.Provider>
    );
};

export const TourElement = ({
    id,
    children,
    ...restProps
}: TourElementPropsType) => {
    const { tourState, dispatchTourEvent, tourSteps } = useContext(TourContext);

    const tourElementStateIndex = tourSteps
        .map(step => step.elementId)
        .indexOf(id);
    const activeStepIndex = tourSteps
        .map(step => step.id)
        .indexOf(tourState.id);

    if (tourElementStateIndex === -1) {
        return children;
    } else {
        const isTourElementActive = activeStepIndex === tourElementStateIndex;
        const tourElementStep = tourSteps[tourElementStateIndex];

        const onClick = (e: React.MouseEvent<HTMLElement>) => {
            dispatchTourEvent(tourElementStep.data.trigger);
            if (children.props && children.props.onClick) {
                children.props.onClick(e);
            }
        };

        return (
            <ThemeProvider value={tourFloaterTheme}>
                <Floater
                    content={
                        isTourElementActive ? tourElementStep.data.content : ""
                    }
                    position={
                        isTourElementActive
                            ? tourElementStep.data.position
                            : "left"
                    }
                    show={isTourElementActive}
                    {...restProps}
                >
                    {React.cloneElement(children, {
                        onClick,
                    })}
                </Floater>
            </ThemeProvider>
        );
    }
};

export default Tour;
