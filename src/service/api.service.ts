import type {CommentModel} from "../models/CommentModel.ts";

const endpointComments = import.meta.env.VITE_API_URL + '/comments';

const loadComments = async (): Promise<CommentModel[]> => {
    return await fetch(endpointComments)
        .then(value => value.json())
}

export {loadComments}