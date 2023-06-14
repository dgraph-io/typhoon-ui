/// <reference types="react" />
import { StylesObject } from "../../../types";
export interface NavbarPropsType {
    children?: React.ReactNode;
    styles?: StylesObject;
}
export interface NavbarLogoPropsType {
    src: string;
    alt: string;
    styles?: StylesObject;
    link?: string;
}
