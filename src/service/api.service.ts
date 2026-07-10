import {urls} from "../constants/urls.tsx";
import type {IUser} from "../components/model/IUser.ts";
import type {IPost} from "../components/model/IPost.ts";

export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then(res => res.json())
    },
    getUserById: async (id: number): Promise<IUser> => {
        return await fetch(urls.users.byId(id))
            .then(res => res.json())
    }
}

export const postService = {
    getAllPostsOfUserById: async (id: number): Promise<IPost[]> => {
        return await fetch(urls.posts.userPostsById(id))
            .then(value => value.json())

    }
}