import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {PaginationLayout} from "../layouts/PaginationLayout.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";

export const routes = createBrowserRouter(
    [
        {
            path: '/', element: <MainLayout/>, children: [{
                path: 'list', element: <PaginationLayout/>, children: [
                    {path: 'products', element: <ProductsPage/>}
                ]
            }]
        }
    ]
)