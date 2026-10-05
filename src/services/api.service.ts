// Базовий URL віддаленого REST API JSONPlaceholder для виконання HTTP-запитів
const baseUrl = 'https://jsonplaceholder.typicode.com';

// Універсальна асинхронна функція getAll з дженеріком <T> для отримання масивів або об'єктів даних з ендпоінта
export const getAll = async <T>(endpoint: string): Promise<T> => {
    // Виконуємо HTTP GET-запит через fetch та парсимо тіло відповіді у формат JSON
    const responseResult = await fetch(`${baseUrl}${endpoint}`)
        .then((response: Response) => response.json());
    // Приводимо отримані дані до очікуваного типу T та повертаємо результат
    return responseResult as T;
};