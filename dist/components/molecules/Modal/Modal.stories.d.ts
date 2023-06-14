/// <reference types="react" />
declare const _default: {
    title: string;
    component: ({ heading, isOpen, onClose, onContinue, continueLabel, closeLabel, children, continueButtonVariant, hideCloseButton, disableOverlay, disableEscape, disableContinueButton, styles: stylesProp, }: import("./Modal.types").ModalPropsType) => import("@emotion/react").jsx.JSX.Element;
};
export default _default;
export declare const ModalControlled: () => JSX.Element;
export declare const ModalOpenWithoutContinue: () => JSX.Element;
export declare const ModalOpenWithOnContinue: () => JSX.Element;
