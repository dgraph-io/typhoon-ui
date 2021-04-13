import { useContext } from "react";

import ToastManager from "../components/molecules/Toast/ToastProvider";

export const useToast = () => {
    return useContext(ToastManager);
};
