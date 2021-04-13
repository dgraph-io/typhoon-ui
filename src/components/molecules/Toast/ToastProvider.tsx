import React, { createContext, useReducer } from "react";
import Toast from "./Toast";
import {
    ToastContextValue,
    ToastContextProviderType,
    ToastPropsType,
    ToastType,
} from "./Toast.types";
import { toastReducer } from "./reducer/toast.reducer";
import { styles } from "./Toast.styles";
import { Stack } from "components";
import { uuid } from "helpers/utils";

const ToastContext = createContext({} as ToastContextValue);

export default ToastContext;

export function ToastManager({ children }: ToastContextProviderType) {
    const [toasts, dispatch] = useReducer(toastReducer, []);

    const addToast = (toast: ToastPropsType) => {
        const id = toast.id || uuid();
        dispatch({
            type: "ADD_TOAST",
            payload: { ...toast, id },
        });
        return id;
    };

    const removeToast = (toastId: string) => {
        dispatch({
            type: "DELETE_TOAST",
            payload: toastId,
        });
    };

    const updateToast = (updatedToast: ToastType) => {
        dispatch({
            type: "UPDATE_TOAST",
            payload: updatedToast,
        });
    };

    return (
        <ToastContext.Provider value={{ addToast, removeToast, updateToast }}>
            {children}
            <Stack direction="vertical" gap={2} styles={styles.ToastsContainer}>
                {toasts.map(toast => {
                    const { id } = toast;
                    return (
                        <Toast
                            key={id}
                            {...toast}
                            onCloseToast={() => removeToast(id)}
                        />
                    );
                })}
            </Stack>
        </ToastContext.Provider>
    );
}
