export interface ToastPropsType {
    heading?: string;
    variant?: "success" | "error" | "info" | "warning";
    styles?: Object;
    description?: string;
    onCloseToast?: () => void;
    id?: string;
    permanent?: boolean;
}

export interface ToastType extends ToastPropsType {
    id: string;
}

export interface ToastContextProviderType {
    children: React.ReactNode;
}

export type ToastContextValue = {
    addToast: (toast: ToastPropsType) => string;
    removeToast: (toastId: string) => void;
    updateToast: (updatedToast: ToastType) => void;
};
