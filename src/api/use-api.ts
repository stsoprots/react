// Це наш власний "пульт" для відправки запитів в інтернет:
// він сам підставляє адресу сервера (JSONPlaceholder) і дає готові функції
// (get, post, put, deleteEntity), щоб швидко тягнути або відправляти дані й ловити помилки,
// без потреби щоразу писати axios вручну.

import axios from 'axios';

type AxiosUpdateData<TData, TBody> = ({
    route,
    body,
}: {
    route: string;
    body: TBody;
}) => Promise<TData>;

interface Output<TData, TBody> {
    get: ({ route }: { route: string }) => Promise<TData>;
    post: AxiosUpdateData<TData, TBody>;
    put: AxiosUpdateData<TData, TBody>;
    deleteEntity: ({ route }: { route: string }) => Promise<null>;
}

const API_URL = 'https://jsonplaceholder.typicode.com';

export const useApi = <T, TBody = any>(): Output<T, TBody> => {
    const getApiPath = (route: string): string => `${API_URL}/${route}`;

    const get = async ({ route }: { route: string }): Promise<T> => {
        try {
            const { data } = await axios.get(getApiPath(route));

            return data;
        } catch (e) {
            if (e && typeof e === 'object' && 'message' in e && typeof e.message === 'string') {
                throw new Error(e.message);
            }

            throw new Error('Network Error');
        }
    };

    const post = async ({ route, body }: { route: string; body: TBody }): Promise<T> => {
        try {
            const { data } = await axios.post(getApiPath(route), { ...body });

            return data;
        } catch (e) {
            if (e && typeof e === 'object' && 'message' in e && typeof e.message === 'string') {
                throw new Error(e.message);
            }

            throw new Error('Network Error');
        }
    };

    const put = async ({ route, body }: { route: string; body: TBody }): Promise<T> => {
        try {
            const { data } = await axios.put(getApiPath(route), { ...body });

            return data;
        } catch (e) {
            if (e && typeof e === 'object' && 'message' in e && typeof e.message === 'string') {
                throw new Error(e.message);
            }

            throw new Error('Network Error');
        }
    };

    const deleteEntity = async ({ route }: { route: string }): Promise<null> => {
        try {
            const { data } = await axios.delete(getApiPath(route));

            return data;
        } catch (e) {
            if (e && typeof e === 'object' && 'message' in e && typeof e.message === 'string') {
                throw new Error(e.message);
            }

            throw new Error('Network Error');
        }
    };

    return {
        get,
        post,
        put,
        deleteEntity,
    };
};