import {createBrowserRouter} from "react-router-dom";
// Імпортуємо createBrowserRouter з пакету react-router-dom.

import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";
// Імпортуємо сторінку з авторизацією масивів даних.

import {LoginPage} from "../pages/LoginPage.tsx";
// Імпортуємо сторінку логінації, тобто логіну.

import {HomePage} from "../pages/HomePage.tsx";
// Імпортуємо домашню сторінку.

import {MainLayout} from "../layouts/MainLayout.tsx";
// Імпортуємо основну обгортку.

export const routes = createBrowserRouter([
// Створюємо маршрутизацію через createBrowserRouter та експортуємо її для використання в інших файлах.
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            // Зазначаємо перший шлях path '/', початковий елемент MainLayout та вказуємо дочірні маршрути children.

            {
                index: true,
                element: <HomePage/>
            },
            // Елемент домашньої сторінки: index true означає, що вона відкривається першочергово за тим самим шляхом '/', що й батьківська компонента.

            {
                path: 'login',
                element: <LoginPage/>
            },
            // Наступний шлях це login, тобто '/login': рендерить сторінку з логінацією.

            {
                path: '/auth/resources',
                element: <AuthResourcesPage/>
            }
            // Шлях '/auth/resources': сторінка з аутентифікацією, після якої завантажуємо потрібний масив даних (в нашому випадку products).
        ]
    }
]);