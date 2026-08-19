import {Outlet} from "react-router";

export const MainLayout = () => {
    return (
        <div>
            main page
            <Outlet/>
        </div>
    );
};