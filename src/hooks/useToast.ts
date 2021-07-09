import { ToastContextValue } from "components/molecules/Toast/Toast.types";
import { useContext } from "react";

export const useToast = (context: React.Context<ToastContextValue>) => {
    return useContext<ToastContextValue>(context);
};
