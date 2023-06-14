/// <reference types="react" />
import { StylesObject } from "../../../types";
export interface AccordionPropsType {
    selected: string | null;
    children: React.ReactNode;
    styles?: StylesObject;
    onSelect: (id: string | null) => void;
}
export interface AccordionItemPropsType {
    children: any;
    label: string;
    id: string;
    open?: boolean;
}
export declare type ChevronContainerPropsType = {
    isOpen: boolean;
};
