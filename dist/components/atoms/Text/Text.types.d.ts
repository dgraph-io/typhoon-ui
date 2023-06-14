/// <reference types="react" />
import { StylesObject } from "../../../types";
export interface TextPropsType {
    styles?: StylesObject;
    children: React.ReactNode;
    variant?: number;
    weight?: number;
    color?: string;
}
