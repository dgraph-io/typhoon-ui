/// <reference types="react" />
declare const _default: {
    title: string;
    component: ({ heading, variant, description, styles: stylesProp, permanent, onCloseToast, }: import("./Toast.types").ToastPropsType) => import("@emotion/react").jsx.JSX.Element;
    decorators: ((Story: any) => JSX.Element)[];
};
export default _default;
export declare const DefaultToast: () => JSX.Element;
export declare const ToastAutoClose: () => JSX.Element;
export declare const PermanentToast: () => JSX.Element;
export declare const ToastWarning: () => JSX.Element;
