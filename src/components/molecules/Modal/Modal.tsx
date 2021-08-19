/*
 * Copyright 2021 Dgraph Labs, Inc. and Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @jsx jsx */
import { useRef, useEffect } from "react";
import { jsx } from "@emotion/react";
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
                styles={modalContainerStyles}
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
