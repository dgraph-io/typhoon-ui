/// <reference types="react" />
import { StylesObject } from "../../../types";
export interface TabPropsType {
    children: JSX.Element;
    label: string;
    id: string;
    onClick?: () => void;
}
export interface TabsPropsType {
    children?: React.ReactNode;
    onSelect: any;
    selected: string;
    styles?: StylesObject;
    showDivider?: boolean;
    tabWidth?: string;
    unselected?: React.ReactNode | string;
}
export interface ControlledTabsPropsType {
    defaultSelected: any;
    children?: React.ReactNode;
    showDivider?: boolean;
    tabWidth?: string;
}
