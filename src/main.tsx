// Імпортуємо функцію createRoot із пакета react-dom/client для створення кореня монтування додатка в DOM
import { createRoot } from 'react-dom/client'
// Підключаємо глобальні базові стилі додатка (скидання стилів, шрифти, спільні класи)
import './index.css'
// Імпортуємо провайдер RouterProvider для забезпечення маршрутизації в додатку (React Router)
import {RouterProvider} from "react-router";
// Імпортуємо провайдер Provider із пакета react-redux для прокидання глобального стану Redux у всі дочірні компоненти
import {Provider} from "react-redux";
// Імпортуємо заздалегідь налаштовану конфігурацію маршрутів (створену за допомогою createBrowserRouter або аналога)
import {routes} from "./routes/routes.tsx";
// Імпортуємо налаштований головний об'єкт сховища Redux (store), де зберігається глобальний стейт додатка
import {store} from "./redux/store.ts";

// Знаходимо DOM-вузол з id="root" (! стверджує наявність елемента) і створюємо точку монтування React-додатка через .render()
createRoot(document.getElementById('root')!).render(
    // Огортаємо дерево в Redux Provider, передаючи сховище в пропс store={store} для надання доступу до стейту та dispatch
    <Provider store={store}>
        {/* Рендеримо маршрутизатор RouterProvider із конфігурацією router={routes} для відображення відповідних компонентів за URL */}
        <RouterProvider router={routes}/>
    </Provider>
)