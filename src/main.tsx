import { createRoot } from 'react-dom/client'
// ! Імпортуємо createRoot з react-dom/client (а не просто з react-dom).

import './index.css'
// Імпортуємо файл стилів.

import {RouterProvider} from "react-router-dom";
// Імпортуємо RouterProvider з react-router-dom, який допоможе нам підключити саму маршрутизацію.

import {routes} from "./routes/routes.tsx";
// Імпортуємо routes — конфігурацію, де описані всі шляхи маршрутизації.

createRoot(document.getElementById('root')!).render(<RouterProvider router={routes}/>)
// Знаходимо в документі блок 'root', створюємо корінь і рендеримо RouterProvider, передаючи йому готові маршрути routes.