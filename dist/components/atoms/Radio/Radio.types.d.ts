import { StylesObject } from "../../../types";
export interface RadioPropsType {
    id?: string;
    checked?: boolean;
    styles?: StylesObject;
    label?: string;
    onChange?: () => void;
    onClick?: () => void;
}
