import {useEffect} from "react";
// Імпортуємо useEffect з React.

import {loadAuthProducts, refresh} from "../services/api.service.ts";
// Імпортуємо loadAuthProducts і refresh з сервісу api.service — наші створені функції, які потрібні для автентифікації та завантаження потрібних даних.

export const AuthResourcesPage = () => {
// Експортуємо саму сторінку, щоб використовувати її в інших файлах.

    useEffect(() => {
        // Використовуємо хук useEffect. Оскільки передано пустий масив залежностей [], ця частина коду відпрацьовує тільки один раз при завантаженні сторінки.
        loadAuthProducts().then(products => {
            // Кличемо функцію loadAuthProducts, і після отримання даних беремо наш масив products та виводимо його в консоль.
            console.log(products);
        }).catch(reason => {
            // Схоплюємо помилку, якщо запит не пройшов (наприклад, закінчився час дії токена), та виводимо її в консоль, щоб бачити причину.
            console.log(reason);
            refresh()
                // Коли з'являється помилка, кличемо функцію refresh, яка оновлює наш accessToken і дає змогу продовжувати роботу з сайтом.
                .then(() => loadAuthProducts())
                // Після оновлення токена заново викликаємо loadAuthProducts, щоб повторити завантаження потрібного масиву даних.
                .then(value=> console.log(value))
            // Отримане значення успішно відображаємо в консолі.
        })
    }, []);


    return (
        <>
            AuthResourcesPage
        </>
    );
    // Повертаємо через return простий текст AuthResourcesPage, тобто тут нічого такого.
};