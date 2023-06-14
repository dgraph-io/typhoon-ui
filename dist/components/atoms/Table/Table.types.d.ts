/// <reference types="react" />
import { StylesObject } from "../../../types";
export interface TablePropsType {
    children: React.ReactNode;
    fullWidth?: boolean;
    styles?: StylesObject;
}
export interface TableBodyPropsType {
    children: React.ReactNode;
    styles?: StylesObject;
}
export interface TableDescriptionPropsType {
    children: React.ReactNode | string;
    styles?: StylesObject;
    colSpan?: number;
}
export interface TableHeadPropsType {
    align?: "left" | "right" | "center";
    children: React.ReactNode;
    styles?: StylesObject;
}
export interface TableRowPropsType extends React.HTMLProps<HTMLTableRowElement> {
    children?: React.ReactNode;
    styles?: StylesObject;
    clickable?: boolean;
    onClick?: () => void;
    tabIndex?: number;
    onKeyPress?: any;
    ref?: any;
}
export interface TableHeadingPropsType {
    children?: React.ReactNode;
    styles?: StylesObject;
    colSpan?: number;
}
