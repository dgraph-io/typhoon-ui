export interface AlertPropsType {
    variant?: "info" | "warning" | "error" | "success" | "tip";
    heading?: string;
    children?: React.ReactNode;
    styles?: object;
}
