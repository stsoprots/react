import axios from 'axios';
// Імпортуємо Axios — аналог fetch, який дозволяє нам отримувати або надсилати по API певні дані.

import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
// Імпортуємо типізацію IUserWithTokens.

import type {IProduct} from "../models/IProduct.ts";
// Імпортуємо типізацію IProduct.

import type {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
// Імпортуємо типізацію IProductsResponseModelType.

import {retriveLocalStorage} from "./helpers.ts";
// Імпортуємо з файлу helpers.ts функцію retriveLocalStorage.

import type {ITokenPair} from "../models/ITokenPair.ts";
// Імпортуємо типізацію ITokenPair.


type LoginData = {
    username: string;
    password: string;
    expiresInMins: number
}
// Зазначаємо типізацію LoginData, щоб коли функція login отримує дані, ми зразу вказали їхню типізацію — що до чого належить.

const axiosInstance= axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});
// Створюємо та налаштовуємо наш екземпляр axiosInstance, де базова URL — це адреса dummyjson з ендпоінтом '/auth' для аутентифікації.

// Підключаємо інтерсептор до нашого Axios, який спрацьовує автоматично перед відправкою кожного запиту. Цей блок створений з метою перехоплювати запит і автоматично додавати наш токен з localStorage в заголовок Authorization перед тим, як дані полетять на сервер.
axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        // Перевіряємо метод запиту: переводимо всі букви у верхній регістр і, якщо це метод 'GET', виконуємо умову.
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
        // Дістаємо функцією retriveLocalStorage збереженого 'user' (типізованого IUserWithTokens), беремо його accessToken і підставляємо в заголовок Authorization як Bearer токен.
    }

    return requestObject;
    // Повертаємо змінений requestObject для подальшої відправки запиту.
})


// Експортуємо асинхронну функцію login, яка приймає параметри username, password, expiresInMins з типізацією LoginData і повертає проміс з типом даних IUserWithTokens. Вона допомагає нам відправити логін і пароль на сервер, авторизувати юзера, отримати токени і зберегти все це в localStorage, щоб ми залишалися залогіненими в системі.
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {

    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    // Робимо POST-запит за адресою '/login', передаємо туди наші параметри, чекаємо відповіді та деструктуризуємо поле data, перейменовуючи його в userWithTokens.
    console.log(userWithTokens);
    // Відображаємо отримані дані userWithTokens у консолі.
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    // Звертаємося до localStorage і записуємо за ключем 'user' наші дані userWithTokens, перевівши їх у рядок через JSON.stringify.
    return userWithTokens
    // Повертаємо отримані дані користувача з токенами.
}

// Експортуємо асинхронну функцію loadAuthProducts, яка обіцяє повернути масив товарів типу IProduct[]. Вона виконує захищений запит на сервер за товарами: завдяки нашому інтерсептору запит одразу летить із токеном і віддає нам готовий список продуктів.
export const loadAuthProducts = async(): Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products');
    // Робимо GET-запит на ендпоінт '/products' з типізацією відповіді IProductsResponseModelType і через деструктуризацію дістаємо поле products.

    return products
    // Повертаємо отриманий масив продуктів.
}

// Експортуємо асинхронну функцію refresh, яка оновлює наш accessToken. Ця функція потрібна на випадок, коли час дії старого токена вийшов: вона бере збережений refreshToken, надсилає його бекенду, забирає нові токени та переписує їх у localStorage, щоб не доводилося логінитись з нуля.
export const refresh= async() => {

    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    // Дістаємо з localStorage нашого користувача 'user' з типізацією IUserWithTokens.
    const {data: {accessToken , refreshToken }} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMins: 1
    });
    // Робимо POST-запит на ендпоінт '/refresh' з типом ITokenPair, передаємо старий refreshToken і деструктуризуємо з data нові accessToken та refreshToken.
    iUserWithTokens.accessToken = accessToken;
    // Записуємо новий accessToken у нашого юзера.
    iUserWithTokens.refreshToken = refreshToken;
    // Записуємо новий refreshToken у нашого юзера.
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
    // Зберігаємо оновленого користувача з новими токенами назад у localStorage, перевівши його в рядок через JSON.stringify.
}