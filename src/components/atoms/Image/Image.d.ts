import { ImagePropsType } from "./Image.types";
declare const Image: {
    ({ fullWidth, alt, src, styles: stylesProp, ...props }: ImagePropsType): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            alt: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            src: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
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
            theme: {
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
export default Image;
