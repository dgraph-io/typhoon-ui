/// <reference types="react" />
import { StylesObject } from "../../../types";
export declare type ButtonVariantType = "scream" | "yell" | "cheer" | "murmur" | "whistle" | "ghost";
export interface ButtonPropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean;
    variant?: ButtonVariantType;
    styles?: StylesObject;
    theme?: Object;
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}
