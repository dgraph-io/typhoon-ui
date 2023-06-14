/// <reference types="react" />
import { StylesObject } from "../../../types";
export interface AlertPropsType {
    variant?: "info" | "warning" | "error" | "success" | "tip";
    heading?: string;
    children?: React.ReactNode;
    styles?: StylesObject;
}
