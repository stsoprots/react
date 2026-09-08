// Створюємо інтерфейс типізації для пари токенів — accessToken та refreshToken, щоб підтримувати доступ до надсилання й отримання захищених даних і мати змогу оновлювати токен для підтримання зв'язку із сервером.
export interface ITokenPair {
    accessToken: string;
    refreshToken: string;
}