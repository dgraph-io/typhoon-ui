import React from "react";
import { StylesObject } from "../../../types";
export interface InputPropsType extends React.HTMLProps<HTMLInputElement> {
    variant?: "small" | "medium" | "large";
    styles?: StylesObject;
    fullWidth?: boolean;
    disabled?: boolean;
    placeholder?: string;
    ref?: any;
    maxLength?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
