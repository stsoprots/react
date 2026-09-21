import {createBrowserRouter, type RouteObject} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {UserPage} from "../pages/UserPage.tsx";
import {PostPage} from "../pages/PostPage.tsx";

const routes: RouteObject[] = [
    {
        path: '', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'posts/:id', element: <PostPage/>},
        ]
    }
];

export const router = createBrowserRouter(routes);