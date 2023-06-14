/** @jsx jsx */
import { jsx } from "@emotion/react";
import { ToastPropsType } from "./Toast.types";
declare const Toast: ({ heading, variant, description, styles: stylesProp, permanent, onCloseToast, }: ToastPropsType) => jsx.JSX.Element;
export default Toast;
