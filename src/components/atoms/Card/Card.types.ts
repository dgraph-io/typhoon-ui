export interface CardPropsType {
    clickable?: boolean;
    children: React.ReactNode;
    styles?: Object;
    theme?: Object;
    role?: string;
    onClick?: () => void;
    id?: string;
}
