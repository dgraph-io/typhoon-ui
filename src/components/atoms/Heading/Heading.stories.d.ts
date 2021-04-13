/// <reference types="react" />
declare const _default: {
    title: string;
    component: {
        ({ variant, weight, color, styles: stylesProp, children, ...props }: import("./Heading.types").HeadingPropsType): JSX.Element;
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
                        value: number;
                    };
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                weight: {
                    defaultValue: {
                        value: number;
                    };
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                color: {
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
export declare const Sizes: {
    (): JSX.Element;
    parameters: any;
};
