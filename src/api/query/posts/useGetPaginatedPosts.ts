// ==== useGetPaginatedPosts.ts ======
// 1. Описує тип поста — вказує поля id, title, body та userId для постів. (10-15:)
// 2. Приймає параметри пагінації — отримує ліміт (limit) та зміщення (offset). (18:)
// 3. Формує запит на сервер — тягне масив постів за маршрутом '/posts?_start={offset}&_limit={limit}'. (23-25:)
// 4. Кешує за ключем — розділяє кеш за комбінацією ['posts', limit, offset]. (22:)
// 5. Запобігає блиманню — завдяки keepPreviousData тримає старі пости на екрані, поки підвантажуються нові для наступної сторінки. (26:)

import {useApi} from "../../use-api.ts";
import {keepPreviousData, useQuery} from "@tanstack/react-query";

interface Post{
    id: string,
    title: string,
    body: string,
    userId: string,
}

export const useGetPaginatedPosts = ({limit, offset}: {limit: number; offset: number}) => {
    const {get} = useApi<Post[]>()

    return useQuery({
        queryKey: ['posts', limit, offset],
        queryFn: async () => {
            return get({route: `/posts?_start=${offset}&_limit=${limit}`})
        },
        placeholderData: keepPreviousData
    })
}