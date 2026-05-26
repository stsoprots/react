import type {PostModel} from "../models/PostModel.ts";

const endpointPosts = import.meta.env.VITE_API_URL + "/posts";

const loadPosts = async (): Promise<PostModel[]> => {
    return await fetch(endpointPosts)
        .then(value => value.json())
}

export {loadPosts};