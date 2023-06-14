/// <reference types="react" />
import { StylesObject } from "../../../types";
export interface SelectPropsType {
    styles?: StylesObject;
    buttonStyles?: StylesObject;
    listStyles?: StylesObject;
    fullWidth?: boolean;
    label?: string;
    onSelect: any;
    selected?: null | ValueType;
    values: ValueType[];
    disabled?: boolean;
    maxHeight?: number;
    heightOffset?: number;
}
export interface ValueType {
    id?: string;
    label?: string | React.ReactNode;
    value?: any;
}
export interface SelectType {
    value: any;
}
