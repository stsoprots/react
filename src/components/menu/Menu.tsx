import {Link, Outlet} from "react-router";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/users'>Users</Link></li>
                <li><Link to='/posts'>Posts</Link></li>
                <li><Link to='/comments'>Comments</Link></li>
                <li><Link to='/complex'>Complex</Link></li>

                <hr/>

                <Outlet/>
            </ul>
        </div>
    );
};