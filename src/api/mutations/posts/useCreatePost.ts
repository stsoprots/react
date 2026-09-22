// ==== useCreatePost.ts ======
// 1. Описує типи даних — задає формат даних для відправки (RequestProps) та відповіді сервера (Response). (10-19:)
// 2. Бере метод POST — витягує функцію post з нашого хука useApi. (22:)
// 3. Відправляє новий пост — передає title, body та userId на адресу '/posts' через useMutation. (26-35:)
// 4. Вимикає повтори — забороняє автоматично повторювати запит у разі виникнення помилки. (36:)

import {useApi} from "../../use-api.ts";
import {useMutation} from "@tanstack/react-query";

interface RequestProps {
    title: string;
    body: string;
    userId: string;
}

interface Response extends Omit<RequestProps, 'userId'>{
    id: number;
    userId: number;
}

export const useCreatePost = () => {
    const {post} = useApi<Response>();

    const route = '/posts';

    return useMutation({
        mutationFn: async ({title, userId, body}: RequestProps): Promise<Response> => {
            return post({
                route,
                body: {
                    title,
                    body,
                    userId
                }
            })
        },
        retry: false
    })
}