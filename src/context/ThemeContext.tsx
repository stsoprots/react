import {createContext} from "react";

export type Theme = "light" | "dark"

export type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

export const init: ThemeContextType = {
    theme: "light",
    toggleTheme: () => {
        console.log("toggleTheme default");
    }
}


export const ThemeContext = createContext<ThemeContextType>(init)