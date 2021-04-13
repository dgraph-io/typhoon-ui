import React from "react";
interface FocusVisibleManagerProps {
    children: React.ReactNode;
}
export declare const FocusVisibleContext: React.Context<{
    hadKeyboardEvent: boolean;
    isInitialized: boolean;
}>;
export declare function FocusVisibleManager(props: FocusVisibleManagerProps): React.FunctionComponentElement<React.ProviderProps<{
    hadKeyboardEvent: boolean;
    isInitialized: boolean;
}>>;
export declare namespace FocusVisibleManager {
    var displayName: string;
    var __docgenInfo: {
        description: string;
        displayName: string;
        props: {};
    };
}
export declare function useFocusVisible(): {
    focusVisible: boolean;
    onFocus: () => void;
    onBlur: () => void;
};
export {};
