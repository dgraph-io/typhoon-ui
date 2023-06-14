/// <reference types="react" />
import { StylesObject } from "../../../types";
export interface CardPropsType {
    clickable?: boolean;
    children: React.ReactNode;
    styles?: StylesObject;
    theme?: Object;
    role?: string;
    onClick?: () => void;
    id?: string;
}
