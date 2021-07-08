import { useContext } from "react";

import React from "react";

import { theme } from "../theme";

export const ThemeContext = React.createContext(theme);

export const ThemeProvider = ({
    children,
    value,
}: {
    children: React.ReactNode;
    value: any;
}) => {
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
