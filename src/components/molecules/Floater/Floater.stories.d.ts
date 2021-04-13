/// <reference types="react" />
declare const _default: {
    title: string;
    component: {
        ({ show, position, content: Content, styles: stylesProp, onClick, children, }: import("./Floater.types").FloaterPropType): JSX.Element;
        displayName: string;
        __docgenInfo: {
            description: string;
            displayName: string;
            props: {
                onClick: {
                    defaultValue: null;
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                position: {
                    defaultValue: {
                        value: string;
                    };
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                show: {
                    defaultValue: {
                        value: boolean;
                    };
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                styles: {
                    defaultValue: null;
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                content: {
                    defaultValue: null;
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
            };
        };
    };
};
export default _default;
export declare const FloaterRight: {
    (): JSX.Element;
    parameters: any;
};
export declare const FloaterLeft: {
    (): JSX.Element;
    parameters: any;
};
export declare const FloaterTop: {
    (): JSX.Element;
    parameters: any;
};
export declare const FloaterBottom: {
    (): JSX.Element;
    parameters: any;
};
