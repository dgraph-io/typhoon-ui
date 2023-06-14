import { ToastType } from "../Toast.types";
declare type AddToast = {
    type: "ADD_TOAST";
    payload: ToastType;
};
declare type DeleteToast = {
    type: "DELETE_TOAST";
    payload: string;
};
declare type UpdateToast = {
    type: "UPDATE_TOAST";
    payload: ToastType;
};
export declare type Action = AddToast | DeleteToast | UpdateToast;
export declare const toastReducer: (toasts: ToastType[], action: Action) => ToastType[];
export {};
