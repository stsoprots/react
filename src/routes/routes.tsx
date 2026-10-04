import {createBrowserRouter} from "react-router";
import {Menu} from "../components/menu/Menu.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {ComplexPage} from "../pages/ComplexPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";


export const routes = createBrowserRouter([
    {
        path: "/", element: <Menu/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'complex', element: <ComplexPage/>}
        ]

    }
])