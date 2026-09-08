import {useEffect} from "react";
// Імпортуємо хук useEffect з React.

import {login} from "../services/api.service.ts";
// Імпортуємо функцію login, яку ми раніше написали в сервісах.

export const LoginPage = () => {
// Експортуємо LoginPage, тобто сторінку з логінацією, щоб використовувати її в інших місцях.

    useEffect(() => {
        // Використовуємо хук useEffect. Оскільки масив залежностей [] порожній, цей код не перерендериться від зміни даних, а виконається лише один раз при першому завантаженні сторінки.
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        })
        // Викликаємо функцію login, куди передаємо об'єкт з даними користувача: username, password та expiresInMins. Це логінація користувача, після якої ми отримуємо токени з відповідними правами доступу.
    }, [])


    return (
        <>
            LoginPage
        </>
    );
    // Повертаємо розмітку у формі тексту LoginPage.
};