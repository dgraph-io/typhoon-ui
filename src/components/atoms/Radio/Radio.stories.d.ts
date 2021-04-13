/// <reference types="react" />
declare const _default: {
    title: string;
    component: {
        ({ checked, label, styles: stylesProp, ...props }: import("./Radio.types").RadioPropsType): JSX.Element;
        displayName: string;
        __docgenInfo: {
            description: string;
            displayName: string;
            props: {
                id: {
                    defaultValue: null;
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                checked: {
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
                label: {
                    defaultValue: null;
                    description: string;
                    name: string;
                    required: boolean;
                    type: {
                        name: string;
                    };
                };
                onChange: {
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
export declare const RadioControlled: {
    (): JSX.Element;
    parameters: any;
};
export declare const RadioUnchecked: {
    (): JSX.Element;
    parameters: any;
};
export declare const RadioChecked: {
    (): JSX.Element;
    parameters: any;
};
