/// <reference types="react" />
declare const _default: {
    title: string;
    component: {
        ({ variant, width, styles: stylesProp, ...props }: import("./Divider.types").DividerPropsType): JSX.Element;
        displayName: string;
        __docgenInfo: {
            description: string;
            displayName: string;
            props: {
                styles: {
                    defaultValue: null;
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                theme: {
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
                width: {
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
            };
        };
    };
};
export default _default;
export declare const DividerLine: {
    (): JSX.Element;
    parameters: any;
};
export declare const DashedLine: {
    (): JSX.Element;
    parameters: any;
};
export declare const LineWithWidth: {
    (): JSX.Element;
    parameters: any;
};
