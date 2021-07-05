export interface CheckboxPropsType {
    id?: string;
    checked?: boolean;
    styles?: Object;
    label?: string;
    disabled?: boolean;
    onChange?: () => void;
    onClick?: () => void;
}
