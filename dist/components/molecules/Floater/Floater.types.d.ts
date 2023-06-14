/// <reference types="react" />
import { StylesObject } from "../../../types";
export declare type FloaterPosition = "top" | "left" | "right" | "bottom" | "rightTop";
export interface FloaterPropType {
    children: React.ReactNode;
    onClick?: () => void;
    position: FloaterPosition;
    show?: boolean;
    styles?: StylesObject;
    content?: string | any;
    color?: string;
}
