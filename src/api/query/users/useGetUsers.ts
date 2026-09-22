// ==== useGetUsers.ts ======
// 1. Качає юзерів — бере список із сервера за адресою '/users'.
// 2. Запам'ятовує (кешує) — зберігає їх під ключем 'users', щоб не робити зайвих запитів.
// 3. Стежить за статусом — знає, чи дані ще вантажаться, чи вже прийшли.
// 4. Віддає в компонент — повертає готових юзерів для показу на екрані.

import {useQuery} from "@tanstack/react-query";
import {useApi} from "../../use-api.ts";

interface User {
    id: string;
    name: string;
}

export const useGetUsers = () => {
    const {get} = useApi<User[]>();

    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            return get({route: '/users'});
        }
    })
}