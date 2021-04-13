export interface InputPropsType extends React.HTMLProps<HTMLInputElement> {
    variant?: "small" | "medium" | "large";
    theme?: Object;
    styles?: Object;
    fullWidth?: boolean;
    disabled?: boolean;
    placeholder?: string;
    ref?: any;
    maxLength?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
