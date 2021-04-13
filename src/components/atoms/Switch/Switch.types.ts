export interface SwitchPropsType {
    checked: boolean;
    label?: string;
    styles?: Object;
    disabled?: boolean;
    id: string;
    onClick?: () => void;
    onChange?: () => void;
}
