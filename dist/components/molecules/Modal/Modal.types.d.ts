/// <reference types="react" />
import { ButtonVariantType } from "components/atoms/Button/Button.types";
import { StylesObject } from "../../../types";
export interface ModalPropsType {
    children?: React.ReactNode;
    closeLabel?: string;
    continueLabel?: string;
    styles?: StylesObject;
    heading?: string;
    isOpen: boolean;
    onClose?: () => void;
    onContinue?: () => void;
    hideCloseButton?: boolean;
    continueButtonVariant?: ButtonVariantType;
    disableEscape?: boolean;
    disableOverlay?: boolean;
    disableContinueButton?: boolean;
}
