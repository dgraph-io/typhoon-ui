/// <reference types="react" />
import { StackPropsType } from "./Stack.types";
declare const Stack: {
    ({ fullWidth, justify, inline, align, direction, gap, wrap, styles: stylesProp, ...props }: StackPropsType): JSX.Element;
    defaultProps: {
        gap: number;
        direction: string;
    };
};
export default Stack;
