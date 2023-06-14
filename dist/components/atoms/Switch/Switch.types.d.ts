import { StylesObject } from "../../../types";
export interface SwitchPropsType {
    checked: boolean;
    label?: string;
    styles?: StylesObject;
    disabled?: boolean;
    id: string;
    onClick?: () => void;
    onChange?: () => void;
}
