export interface TourPropsType {
    children: React.ReactNode;
    steps: TourSteps[];
    tourId: string;
}

export interface TourElementPropsType {
    children: JSX.Element;
    id: string;
    styles?: Object;
}

export interface TourState {
    tourState: TourSteps;
    tourSteps: TourSteps[];
}

export interface TourSteps {
    id: string;
    index?: any;
    type?: string;
    data?: any;
    elementId?: string;
}

export interface ActionType {
    payload: any;
    type: string;
}

export interface buildReducerType {
    onUpdateStep: (state: TourState) => void;
    steps?: TourSteps[];
}

export interface TourContextPropsType {
    tourState: TourSteps;
    dispatchTourEvent: (e: string) => void;
    setTourStep: (id: string) => void;
    setDetour: (e: { steps: TourSteps; exit: any }) => void;
    restartTourAt: (id: string) => void;
    tourSteps: TourSteps[];
}

export interface DetourType {
    steps: TourSteps;
    exit: any;
}
