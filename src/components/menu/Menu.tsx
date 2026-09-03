import {Link} from "react-router";

export const Menu = () => {
    return (
        <ul className="menu">
            <li>
                <Link to="/cars" className="nav-btn">cars</Link>
            </li>
            <li>
                <Link to="/cars/create" className="nav-btn">create</Link>
            </li>
        </ul>
    );
};