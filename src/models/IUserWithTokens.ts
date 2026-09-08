// Створюємо інтерфейс типізації даних користувача разом із токенами, щоб типізувати відповідь сервера у вигляді даних юзера та його токенів (accessToken і refreshToken).
export interface IUserWithTokens {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
}