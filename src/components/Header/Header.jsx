import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./style.css";

export const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <header>
                <div className="container">
                    <h1>Where in The World?</h1>
                    <button onClick={toggleTheme}>
                        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
                    </button>
                </div>
            </header>
        </>
    );
};
