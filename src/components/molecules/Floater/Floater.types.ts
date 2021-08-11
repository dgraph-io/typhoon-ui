export type FloaterPosition = "top" | "left" | "right" | "bottom" | "rightTop";
export interface FloaterPropType {
    children: React.ReactNode;
    onClick?: () => void;
    position: FloaterPosition;
    show?: boolean;
    styles?: Object;
    content?: string | any;
    color?: string;
}
