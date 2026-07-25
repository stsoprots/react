import {Link, Outlet} from "react-router-dom";

export const CommentsPage = () => {
    return (
        <div>
            <h1>Comments</h1>
            <ul>
                <li><Link to='jsonplaceholder'>JSON Placeholder</Link></li>
                <li><Link to='dummyjson'>DummyJson</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};