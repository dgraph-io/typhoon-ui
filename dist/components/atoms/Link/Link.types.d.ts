/// <reference types="react" />
import { StylesObject } from "../../../types";
export interface LinkPropsType {
    styles?: StylesObject;
    children?: React.ReactNode;
    openInNewTab?: boolean;
    download?: boolean;
    rel?: string;
    target?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    defaultScheme?: string;
    href?: string;
    disabled?: boolean;
    isContent?: boolean;
}
