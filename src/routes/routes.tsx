import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {JsonUsers} from "../components/UsersComponent/JsonUsers/JsonUsers.tsx";
import {DummyUsers} from "../components/UsersComponent/DummyUsers/DummyUsers.tsx";
import {JsonPosts} from "../components/PostsComponent/JsonPosts/JsonPosts.tsx";
import {DummyPosts} from "../components/PostsComponent/DummyPosts/DummyPosts.tsx";
import {JsonComments} from "../components/CommentsComponent/JsonComments/JsonComments.tsx";
import {DummyComments} from "../components/CommentsComponent/DummyComments/DummyComments.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                path: 'users', element: <UsersPage/>, children: [
                    {path: 'jsonplaceholder', element: <JsonUsers/>},
                    {path: 'dummyjson', element: <DummyUsers/>},
                ]
            },
            {
                path: 'posts', element: <PostsPage/>, children: [
                    {path: 'jsonplaceholder', element: <JsonPosts/>},
                    {path: 'dummyjson', element: <DummyPosts/>},
                ]
            },
            {
                path: 'comments', element: <CommentsPage/>, children: [
                    {path: 'jsonplaceholder', element: <JsonComments/>},
                    {path: 'dummyjson', element: <DummyComments/>}
                ]
            },
        ]
    }
])