import { StylesObject } from "../../../types";
export interface CopyTextPropsType {
    styles?: StylesObject;
    text: string;
    onClick?: (text: string | undefined) => void;
}
