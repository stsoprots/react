import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                path: 'users', element: <UsersPage/>, children: [
                    {path: 'jsonplaceholder', element: <div>JSON Placeholder Users here</div>},
                    {path: 'dummyjson', element: <div>DummyJson Users here</div>},
                ]
            },
            {
                path: 'posts', element: <PostsPage/>, children: [
                    {path: 'jsonplaceholder', element: <div>JSON Placeholder Posts here</div>},
                    {path: 'dummyjson', element: <div>DummyJson Posts here</div>},
                ]
            },
            {
                path: 'comments', element: <CommentsPage/>, children: [
                    {path: 'jsonplaceholder', element: <div>JSON Placeholder Comments here</div>}
                ]
            },
        ]
    }
])