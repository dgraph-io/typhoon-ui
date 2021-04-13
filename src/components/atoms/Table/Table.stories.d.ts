/// <reference types="react" />
declare const _default: {
    title: string;
    component: {
        ({ styles: stylesProp, children, fullWidth, ...props }: import("./Table.types").TablePropsType): JSX.Element;
        displayName: string;
        __docgenInfo: {
            description: string;
            displayName: string;
            props: {
                fullWidth: {
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
            };
        };
    };
};
export default _default;
export declare const Default: {
    (): JSX.Element;
    parameters: any;
};
export declare const TableWithButton: {
    (): JSX.Element;
    parameters: any;
};
