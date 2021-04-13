import React, { useEffect, useState } from "react";

interface FocusVisibleManagerProps {
    children: React.ReactNode;
}
// A React hook based on: https://github.com/WICG/focus-visible
export const FocusVisibleContext = React.createContext({
    hadKeyboardEvent: true,
    isInitialized: false,
});
export function FocusVisibleManager(props: FocusVisibleManagerProps) {
    const [hadKeyboardEvent, setHadKeyboardEvent] = useState(true);
    useEffect(() => {
        function onPointerDown() {
            setHadKeyboardEvent(false);
        }
        /**
         * When the polfyill first loads, assume the user is in keyboard modality.
         * If any event is received from a pointing device (e.g. mouse, pointer,
         * touch), turn off keyboard modality.
         * This accounts for situations where focus enters the page from the URL bar.
         * @param {Event} e
         */
        function onInitialPointerMove(e: any) {
            // Work around a Safari quirk that fires a mousemove on <html> whenever the
            // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
            if (
                e.target.nodeName &&
                e.target.nodeName.toLowerCase() === "html"
            ) {
                return;
            }
            setHadKeyboardEvent(false);
            removeInitialPointerMoveListeners();
        }
        /**
         * Add a group of listeners to detect usage of any pointing devices.
         * These listeners will be added when the polyfill first loads, and anytime
         * the window is blurred, so that they are active when the window regains
         * focus.
         */
        function addInitialPointerMoveListeners() {
            document.addEventListener("mousemove", onInitialPointerMove);
            document.addEventListener("mousedown", onInitialPointerMove);
            document.addEventListener("mouseup", onInitialPointerMove);
            document.addEventListener("pointermove", onInitialPointerMove);
            document.addEventListener("pointerdown", onInitialPointerMove);
            document.addEventListener("pointerup", onInitialPointerMove);
            document.addEventListener("touchmove", onInitialPointerMove);
            document.addEventListener("touchstart", onInitialPointerMove);
            document.addEventListener("touchend", onInitialPointerMove);
        }
        function removeInitialPointerMoveListeners() {
            document.removeEventListener("mousemove", onInitialPointerMove);
            document.removeEventListener("mousedown", onInitialPointerMove);
            document.removeEventListener("mouseup", onInitialPointerMove);
            document.removeEventListener("pointermove", onInitialPointerMove);
            document.removeEventListener("pointerdown", onInitialPointerMove);
            document.removeEventListener("pointerup", onInitialPointerMove);
            document.removeEventListener("touchmove", onInitialPointerMove);
            document.removeEventListener("touchstart", onInitialPointerMove);
            document.removeEventListener("touchend", onInitialPointerMove);
        }
        /**
         * If the most recent user interaction was via the keyboard;
         * and the key press did not include a meta, alt/option, or control key;
         * then the modality is keyboard. Otherwise, the modality is not keyboard.
         * Apply `focus-visible` to any current active element and keep track
         * of our keyboard modality state with `hadKeyboardEvent`.
         * @param {KeyboardEvent} e
         */
        function onKeyDown(e: KeyboardEvent) {
            if (e.metaKey || e.altKey || e.ctrlKey) {
                return;
            }
            setHadKeyboardEvent(true);
        }
        /**
         * If the user changes tabs, keep track of whether or not the previously
         * focused element had .focus-visible.
         * @param {Event} e
         */
        function onVisibilityChange() {
            if (document.visibilityState === "hidden") {
                // If the tab becomes active again, the browser will handle calling focus
                // on the element (Safari actually calls it twice).
                // If this tab change caused a blur on an element with focus-visible,
                // re-apply the class when the user switches back to the tab.
                setHadKeyboardEvent(true);
                addInitialPointerMoveListeners();
            }
        }
        // For some kinds of state, we are interested in changes at the global scope
        // only. For example, global pointer input, global key presses and global
        // visibility change should affect the state at every scope:
        document.addEventListener("keydown", onKeyDown, true);
        document.addEventListener("mousedown", onPointerDown, true);
        document.addEventListener("pointerdown", onPointerDown, true);
        document.addEventListener("touchstart", onPointerDown, true);
        document.addEventListener("visibilitychange", onVisibilityChange, true);
        addInitialPointerMoveListeners();
        return () => {
            document.removeEventListener("keydown", onKeyDown, true);
            document.removeEventListener("mousedown", onPointerDown, true);
            document.removeEventListener("pointerdown", onPointerDown, true);
            document.removeEventListener("touchstart", onPointerDown, true);
            document.removeEventListener(
                "visibilitychange",
                onVisibilityChange,
                true
            );
            removeInitialPointerMoveListeners();
        };
    }, [setHadKeyboardEvent]);
    return React.createElement(
        FocusVisibleContext.Provider,
        React.useMemo(
            () => ({ value: { hadKeyboardEvent, isInitialized: true } }),
            [hadKeyboardEvent]
        ),
        props.children
    );
}
export function useFocusVisible() {
    const [isFocused, setIsFocused] = React.useState(false);
    const { hadKeyboardEvent, isInitialized } = React.useContext(
        FocusVisibleContext
    );
    const onFocus = React.useCallback(() => {
        if (!isFocused) setIsFocused(true);
    }, [isFocused]);
    const onBlur = React.useCallback(() => {
        if (isFocused) setIsFocused(false);
    }, [isFocused]);
    let focusVisible: boolean;
    if (isInitialized) {
        focusVisible = hadKeyboardEvent && isFocused;
    } else {
        // Fallback to focused when the `FocusVisibleManager` is not used.
        focusVisible = isFocused;
    }
    return React.useMemo(
        () => ({
            focusVisible,
            onFocus,
            onBlur,
        }),
        [focusVisible, onBlur, onFocus]
    );
}
