import { StylesObject } from "../../../types";
export interface ProgressBarPropsType {
    progress: number;
    styles?: StylesObject;
    fillStyles?: StylesObject;
    width?: string;
    bgcolor?: string;
    height?: number;
}
