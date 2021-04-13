import React from "react";
import { ToastContextValue, ToastContextProviderType } from "./Toast.types";
declare const ToastContext: React.Context<ToastContextValue>;
export default ToastContext;
export declare function ToastManager({ children }: ToastContextProviderType): JSX.Element;
export declare namespace ToastManager {
    var displayName: string;
    var __docgenInfo: {
        description: string;
        displayName: string;
        props: {};
    };
}
