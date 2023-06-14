import { StylesObject } from "../../../types";
export interface CheckboxPropsType {
    id?: string;
    checked?: boolean;
    styles?: StylesObject;
    label?: string;
    disabled?: boolean;
    onChange?: () => void;
    onClick?: () => void;
}
