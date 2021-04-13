/// <reference types="react" />
declare const _default: {
    title: string;
    component: {
        ({ variant, heading, children, styles: stylesProp, }: import("./Alert.types").AlertPropsType): JSX.Element;
        displayName: string;
        __docgenInfo: {
            description: string;
            displayName: string;
            props: {
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
                heading: {
                    defaultValue: null;
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
            };
        };
    };
};
export default _default;
export declare const AlertDefault: {
    (): JSX.Element;
    parameters: any;
};
export declare const AlertWarning: {
    (): JSX.Element;
    parameters: any;
};
export declare const AlertSuccess: {
    (): JSX.Element;
    parameters: any;
};
export declare const AlertError: {
    (): JSX.Element;
    parameters: any;
};
export declare const AlertTip: {
    (): JSX.Element;
    parameters: any;
};
