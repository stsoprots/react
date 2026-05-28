import type {PostModel, PostResponseDummyjson} from "../models/PostResponseDummyjson.ts";
import type {TodoModel, TodoResponseDummyjson} from "../models/TodoResponseDummyjson.ts";
import type {CommentModel, CommentResponseDummyjson} from "../models/CommentResponseDummyjson.ts";


const endpointPosts = import.meta.env.VITE_API_URL + '/posts';
const endpointTodos = import.meta.env.VITE_API_URL + '/todos';
const endpointComments = import.meta.env.VITE_API_URL + '/comments';

const loadPosts = async (): Promise<PostModel[]> => {
    const response: PostResponseDummyjson = await fetch(endpointPosts)
        .then(value => value.json())

    return response.posts;
}

const loadTodos = async (): Promise<TodoModel[]> => {
    const response: TodoResponseDummyjson = await fetch(endpointTodos)
        .then(value => value.json())

    return response.todos;
}

const loadComments = async (): Promise<CommentModel[]> => {
    const response: CommentResponseDummyjson = await fetch(endpointComments)
        .then(value => value.json())

    return response.comments
}

export {loadPosts, loadTodos, loadComments}

