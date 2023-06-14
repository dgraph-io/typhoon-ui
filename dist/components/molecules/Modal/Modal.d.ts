import { jsx } from "@emotion/react";
import { ModalPropsType } from "./Modal.types";
declare const Modal: ({ heading, isOpen, onClose, onContinue, continueLabel, closeLabel, children, continueButtonVariant, hideCloseButton, disableOverlay, disableEscape, disableContinueButton, styles: stylesProp, }: ModalPropsType) => jsx.JSX.Element;
export default Modal;
