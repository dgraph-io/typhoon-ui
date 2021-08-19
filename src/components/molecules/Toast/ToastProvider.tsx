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

import React, { useReducer } from "react";
import Toast from "./Toast";
import {
    ToastContextProviderType,
    ToastContextValue,
    ToastPropsType,
    ToastType,
} from "./Toast.types";
import { toastReducer } from "./reducer/toast.reducer";
import { styles } from "./Toast.styles";
import { Stack } from "components";
import { uuid } from "helpers/utils";

export const createToastContext = () =>
    React.createContext({} as ToastContextValue);

export function ToastManager({
    context: ToastContext,
    children,
}: ToastContextProviderType) {
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
