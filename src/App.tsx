import './App.css'
import {Link, Outlet, useLocation} from "react-router";
import {Menu} from "./components/menu/Menu.tsx";

function App() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
        return (
            <div className="welcome-screen">
                <h1 className="welcome-title">Cars Collection</h1>
                <div className="welcome-buttons">
                    <Link to="/cars" className="nav-btn">Cars</Link>
                    <Link to="/cars/create" className="nav-btn">Create</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    )
}

export default App
