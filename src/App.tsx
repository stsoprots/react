import './App.css'
import {useState} from "react";
import {type Theme, ThemeContext} from "./context/ThemeContext.tsx";
import {LeftBranch} from "./components/left/LeftBranch.tsx";
import {RightBranch} from "./components/right/RightBranch.tsx";

function App() {

    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };
    
    return (
        <>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <div style={{
                    minHeight: '100vh',
                    background: theme === "light" ? "#f5f5f5" : "#1a1a1a",
                    color: theme === "light" ? "#111" : "#f5f5f5",
                    padding: "16px",
                }}>
                    <h1>Theme: {theme}</h1>

                    <LeftBranch />
                    <RightBranch />
                </div>
            </ThemeContext.Provider>

        </>
    )
}

export default App
