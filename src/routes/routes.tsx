// Імпортуємо фабричну функцію createBrowserRouter з бібліотеки react-router для створення клієнтського роутера
import {createBrowserRouter} from "react-router";
// Імпортуємо кореневий компонент лейаута Menu, що містить спільну навігацію та слот <Outlet/>
import {Menu} from "../components/menu/Menu.tsx";
// Імпортуємо компонент сторінки постів PostsPage для відповідного маршруту
import {PostsPage} from "../pages/PostsPage.tsx";
// Імпортуємо компонент комплексної сторінки ComplexPage, що поєднує користувачів, пости та коментарі
import {ComplexPage} from "../pages/ComplexPage.tsx";
// Імпортуємо компонент сторінки коментарів CommentsPage для маршруту коментарів
import {CommentsPage} from "../pages/CommentsPage.tsx";
// Імпортуємо компонент сторінки користувачів UsersPage для маршруту списку користувачів
import {UsersPage} from "../pages/UsersPage.tsx";

// Оголошуємо та експортуємо конфігурацію маршрутів програми routes
export const routes = createBrowserRouter([
    {
        // Базовий кореневий шлях '/', на якому завжди рендериться основний лейаут Menu
        path: "/",
        element: <Menu/>,
        // Масив дочірніх маршрутів, які підставлятимуться всередину <Outlet/> компонента Menu
        children: [
            // Вкладений маршрут '/users' для перегляду списку користувачів
            {path: 'users', element: <UsersPage/>},
            // Вкладений маршрут '/posts' для перегляду списку публікацій
            {path: 'posts', element: <PostsPage/>},
            // Вкладений маршрут '/comments' для перегляду списку коментарів
            {path: 'comments', element: <CommentsPage/>},
            // Вкладений маршрут '/complex' для ієрархічного виведення користувачів із їхніми постами та коментарями
            {path: 'complex', element: <ComplexPage/>}
        ]
    }
])