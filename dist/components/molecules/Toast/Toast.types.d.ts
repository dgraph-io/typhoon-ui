/// <reference types="react" />
import { StylesObject } from "../../../types";
export interface ToastPropsType {
    heading?: string;
    variant?: "success" | "error" | "info" | "warning";
    styles?: StylesObject;
    description?: string;
    onCloseToast?: () => void;
    id?: string;
    permanent?: boolean;
}
export interface ToastType extends ToastPropsType {
    id: string;
}
export interface ToastContextProviderType {
    children: React.ReactNode;
    context: React.Context<ToastContextValue>;
}
export declare type ToastContextValue = {
    addToast: (toast: ToastPropsType) => string;
    removeToast: (toastId: string) => void;
    updateToast: (updatedToast: ToastType) => void;
};
