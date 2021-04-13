import { StackPropsType } from "./Stack.types";
declare const Stack: {
    ({ fullWidth, justify, inline, align, direction, gap, wrap, styles: stylesProp, ...props }: StackPropsType): JSX.Element;
    defaultProps: {
        gap: number;
        direction: string;
    };
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            align: {
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
            direction: {
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
            wrap: {
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
            gap: {
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
            inline: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            justify: {
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
            fullWidth: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            onClick: {
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
export default Stack;
