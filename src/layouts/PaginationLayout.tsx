import {Outlet} from "react-router";

export const PaginationLayout = () => {
    return (
        <div className="pagination-layout">
            <Outlet/>
        </div>
    );
};