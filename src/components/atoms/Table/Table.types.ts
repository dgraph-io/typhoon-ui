export interface TablePropsType {
    children: React.ReactNode;
    fullWidth?: boolean;
    styles?: Object;
}

export interface TableBodyPropsType {
    children: React.ReactNode;
    styles?: Object;
}

export interface TableDescriptionPropsType {
    children: React.ReactNode | string;
    styles?: Object;
    colSpan?: number;
}

export interface TableHeadPropsType {
    align?: "left" | "right" | "center";
    children: React.ReactNode;
    styles?: Object;
}

export interface TableRowPropsType
    extends React.HTMLProps<HTMLTableRowElement> {
    children?: React.ReactNode;
    styles?: Object;
    clickable?: boolean;
    onClick?: () => void;
    tabIndex?: number;
    onKeyPress?: any;
    ref?: any;
}

export interface TableHeadingPropsType {
    children?: React.ReactNode;
    styles?: Object;
    colSpan?: number;
}
