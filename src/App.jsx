import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <main className={theme}>
                <Header />
                <Outlet />
            </main>
        </>
    );
}

export default App;
