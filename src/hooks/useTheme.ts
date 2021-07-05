import { useContext } from "react";

import React from "react";

import { theme } from "../theme";

const ThemeContext = React.createContext(theme);

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
    return useContext(ThemeContext);
};
