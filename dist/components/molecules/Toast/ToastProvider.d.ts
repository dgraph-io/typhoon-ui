import React from "react";
import { ToastContextProviderType, ToastContextValue } from "./Toast.types";
export declare const createToastContext: () => React.Context<ToastContextValue>;
export declare function ToastManager({ context: ToastContext, children, }: ToastContextProviderType): JSX.Element;
