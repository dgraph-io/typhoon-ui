/// <reference types="react" />
import { StylesObject } from "../../../types";
export interface StackPropsType {
    align?: string;
    styles?: StylesObject;
    direction: "horizontal" | "vertical";
    wrap?: "wrap" | "nowrap" | "wrap-reverse";
    gap?: number;
    inline?: boolean;
    justify?: string;
    fullWidth?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}
