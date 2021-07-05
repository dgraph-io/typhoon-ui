
export interface AccordionPropsType {
    selected: string | null;
    children: React.ReactNode;
    styles?: Object;
    onSelect: (id: string | null) => void;
}

export interface AccordionItemPropsType {
    children: any;
    label: string;
    id: string;
    open?: boolean;
}

export type ChevronContainerPropsType = {
    isOpen: boolean;
};
