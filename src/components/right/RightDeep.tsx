import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext.tsx";

export const RightDeep = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div
            style={{
                marginTop: "8px",
                padding: '12px',
                borderRadius: "8px",
                background: theme === "light" ? "#ffffff" : "#333333",
                border: "1px solid",
                borderColor: theme === "light" ? "#ccc" : "#555",
            }}

        >
            <strong>RightDeep</strong>
            <p>Theme from context: {theme}</p>

            <button type="button" onClick={toggleTheme}>Toggle theme</button>
        </div>
    );
};