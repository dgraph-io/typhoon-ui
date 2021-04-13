import { TextPropsType } from "./Text.types";
declare const Text: {
    ({ variant, weight, color, styles: stylesProp, children, ...props }: TextPropsType): JSX.Element;
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
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            color: {
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
export default Text;
