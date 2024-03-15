import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeContextProvider = ({children}) => {
    const [themeMode, setThemeMode] = useState("light");
    let lightTheme = () => {

    };
    let darkTheme = () => {

    };
    return(
        <ThemeContext.Provider value={{themeMode, setThemeMode,lightTheme, darkTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}