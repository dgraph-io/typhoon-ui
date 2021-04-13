export interface SelectPropsType {
    styles?: Object;
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
