import type {IPostsResponse} from "../models/IPostsResponse.ts";

const url = 'https://dummyjson.com'

export const getPosts = async (page: string): Promise<IPostsResponse> => {
    const limit = 30;
    const skip = limit * (+page) - limit;
    const response = await fetch(url + '/posts' + '?skip=' + skip)
        .then(value => value.json())

    return response
}