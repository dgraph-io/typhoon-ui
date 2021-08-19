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

import { ToastType } from "../Toast.types";
import { uuid } from "helpers/utils";

type AddToast = {
    type: "ADD_TOAST";
    payload: ToastType;
};

type DeleteToast = {
    type: "DELETE_TOAST";
    payload: string;
};

type UpdateToast = {
    type: "UPDATE_TOAST";
    payload: ToastType;
};

export type Action = AddToast | DeleteToast | UpdateToast;

export const toastReducer = (toasts: ToastType[], action: Action) => {
    switch (action.type) {
        case "ADD_TOAST":
            return [
                ...toasts,
                { ...action.payload, id: action.payload.id || uuid() },
            ];
        case "DELETE_TOAST":
            return toasts.filter(toast => toast.id !== action.payload);
        case "UPDATE_TOAST":
            return toasts.map(toast =>
                toast.id === action.payload.id
                    ? { ...toast, ...action.payload }
                    : toast
            );
    }
};
