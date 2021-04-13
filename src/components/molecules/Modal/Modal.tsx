/** @jsx jsx */
import { useRef, useEffect } from "react";
import { jsx } from "@emotion/core";
import { styles } from "./Modal.styles";
import { stylegun } from "helpers/stylegun";
import { useTheme } from "hooks/useTheme";

import { keyCodes } from "helpers/constants";
import { Portal, Card, Heading, Button, Stack } from "components";
import { noop } from "helpers/utils";
import { ModalPropsType } from "./Modal.types";

const Modal = ({
    heading,
    isOpen,
    onClose,
    onContinue,
    continueLabel = "Continue",
    closeLabel = "Cancel",
    children,
    continueButtonVariant = "yell",
    hideCloseButton = false,
    disableOverlay = false,
    disableEscape = false,
    disableContinueButton = false,
    styles: stylesProp = {},
}: ModalPropsType) => {
    const modalRef: any = useRef(null);
    const theme = useTheme();
    const overlayStyles = stylegun({
        css: {
            ...styles.Overlay,
            ...(isOpen ? styles.ShowOverlay : styles.HideOverlay),
            ...(isOpen && onClose && !disableOverlay
                ? { cursor: "pointer" }
                : { cursor: "unset" }),
        },
        theme,
    });
    const modalContainerStyles = stylegun({
        css: {
            ...styles.ModalContainer,
            ...stylesProp,
            ...(isOpen ? styles.ShowModal : styles.HideModal),
        },
        theme,
    });

    useEffect(() => {
        let focusRestoreElement: any;
        let focusableModalElements: any = [];
        const handleKeyDown = (event: KeyboardEvent) => {
            const target = event.target;
            if (event && event.keyCode === keyCodes.ESCAPE && !disableEscape) {
                focusRestoreElement && focusRestoreElement.focus();
                onClose && onClose();
            } else if (
                event.keyCode === keyCodes.TAB &&
                focusableModalElements.length > 0
            ) {
                const firstFocusableElement = focusableModalElements[0];
                const lastFocusableElement = [...focusableModalElements].pop();
                if (!modalRef.current.contains(target)) {
                    firstFocusableElement.focus();
                    event.preventDefault();
                } else if (target === firstFocusableElement && event.shiftKey) {
                    lastFocusableElement.focus();
                    event.preventDefault();
                } else if (target === lastFocusableElement && !event.shiftKey) {
                    firstFocusableElement.focus();
                    event.preventDefault();
                }
            }
        };

        if (isOpen) {
            focusRestoreElement = document.activeElement;
            focusableModalElements = modalRef.current.querySelectorAll(
                'a[href], button, textarea, input, input[type="text"], input[type="radio"], input[type="checkbox"], select'
            );
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose, disableEscape]);

    return (
        <Portal>
            <div
                css={overlayStyles}
                onClick={disableOverlay ? noop : onClose}
            ></div>
            <Card
                role="dialog"
                aria-modal={isOpen}
                aria-hidden={isOpen}
                css={modalContainerStyles}
                ref={modalRef}
            >
                <Stack direction="vertical" gap={2} styles={{height: "100%"}}>
                    {heading && <Heading>{heading}</Heading>}
                    {children}
                    {onContinue && (
                        <Stack
                            direction="horizontal"
                            gap={2}
                            justify="flex-end"
                        >
                            {!hideCloseButton && (
                                <Button variant="ghost" onClick={onClose}>
                                    {closeLabel}
                                </Button>
                            )}
                            <Button
                                disabled={disableContinueButton}
                                onClick={onContinue}
                                variant={continueButtonVariant || "yell"}
                            >
                                {continueLabel}
                            </Button>
                        </Stack>
                    )}
                </Stack>
            </Card>
        </Portal>
    );
};

export default Modal;
