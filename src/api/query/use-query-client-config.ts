// ==== useQueryClientConfig.ts ======
// 1. Ініціалізує глобальний клієнт — створює та типізує новий QueryClient із розширеною конфігурацією. (10-23:)
// 2. Логує успішні запити (Query) — через QueryCache глобально перехоплює будь-яке вдале отримання даних і виводить їх у консоль разом із параметрами запиту. (11-15:)
// 3. Логує успішні мутації (Mutation) — через MutationCache глобально фіксує відповіді після виконання дій (створення/зміни) і виводить результат у консоль. (16-20:)
// 4. Задає поведінку за замовчуванням — встановлює refetchOnWindowFocus: true для автоматичного перезапиту даних при поверненні на вкладку браузера. (21-23:)

import {MutationCache, QueryCache, QueryClient} from "@tanstack/react-query";

export const useQueryClientConfig = (): QueryClient => {
    return new QueryClient({
        queryCache: new QueryCache({
            onSuccess:  (data: any, query) => {
                console.log( {data, query});
            },
        }),
        mutationCache: new MutationCache({
            onSuccess: ( data: any) => {
                console.log( {data});
            },
        }),
        defaultOptions: {
            queries: {refetchOnWindowFocus: true}
        },
    });
}