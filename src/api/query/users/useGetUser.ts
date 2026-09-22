// ==== useGetUser.ts ======
// 1. Приймає параметр — отримує ID конкретного користувача (userId). (14:)
// 2. Робить точковий запит — качає дані одного юзера за адресою '/users/{userId}'. (19-21:)
// 3. Кешує під унікальним ключем — зберігає результат як ['users', userId], щоб дані різних користувачів не перемішувалися. (18:)
// 4. Віддає результат у компонент — повертає готовий об'єкт React Query зі статусом завантаження та даними знайденого юзера. (17:)
import {useQuery} from "@tanstack/react-query";
import {useApi} from "../../use-api.ts";

interface User {
    id: string;
    name: string;
}

export const useGetUser = ({userId}: {userId:string}) => {
    const {get} = useApi<User>();

    return useQuery({
        queryKey: ['users', userId],
        queryFn: async () => {
            return get({route: `/users/${userId}`});
        }
    })
}