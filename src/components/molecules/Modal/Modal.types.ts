import { ButtonVariantType } from "components/atoms/Button/Button.types";

export interface ModalPropsType {
    children?: React.ReactNode;
    closeLabel?: string;
    continueLabel?: string;
    styles?: object;
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
