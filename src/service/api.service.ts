import type {PostModel, PostResponseDummyjson} from "../models/PostResponseDummyjson.ts";

const endpointPosts = import.meta.env.VITE_API_URL + '/posts';


const loadPosts = async (): Promise<PostModel[]> => {
    const response: PostResponseDummyjson = await fetch(endpointPosts)
        .then(value => value.json())

    return response.posts;
}

export {loadPosts}

