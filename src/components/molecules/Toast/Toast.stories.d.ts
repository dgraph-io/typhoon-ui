/// <reference types="react" />
declare const _default: {
    title: string;
    component: {
        ({ heading, variant, description, styles: stylesProp, permanent, onCloseToast, }: import("./Toast.types").ToastPropsType): JSX.Element;
        displayName: string;
        __docgenInfo: {
            description: string;
            displayName: string;
            props: {
                heading: {
                    defaultValue: null;
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                variant: {
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
                styles: {
                    defaultValue: null;
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                description: {
                    defaultValue: null;
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                onCloseToast: {
                    defaultValue: null;
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                id: {
                    defaultValue: null;
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                permanent: {
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
            };
        };
    };
    decorators: ((Story: any) => JSX.Element)[];
};
export default _default;
export declare const DefaultToast: {
    (): JSX.Element;
    parameters: any;
};
export declare const ToastAutoClose: {
    (): JSX.Element;
    parameters: any;
};
export declare const PermanentToast: {
    (): JSX.Element;
    parameters: any;
};
export declare const ToastWarning: {
    (): JSX.Element;
    parameters: any;
};
