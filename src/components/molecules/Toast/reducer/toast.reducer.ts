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
