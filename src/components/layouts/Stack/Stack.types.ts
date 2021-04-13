export interface StackPropsType {
    align?: string;
    styles?: Object;
    direction: "horizontal" | "vertical";
    wrap?: "wrap" | "nowrap" | "wrap-reverse";
    gap?: number;
    inline?: boolean;
    justify?: string;
    theme?: Object;
    fullWidth?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}
