import {Outlet} from "react-router";
import {PaginationComponent} from "../component/pagination-component/PaginationComponent.tsx";

export const PaginationLayout = () => {
    return (
        <div className="pagination-layout">
            <Outlet/>
            <PaginationComponent/>
        </div>
    );
};