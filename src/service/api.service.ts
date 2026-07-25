import type IUserJsonPl from "../components/model/JsonPlaceholder/IUserJsonPl.ts";
import {urls} from "../constants/urls.ts";
import type IPostJsonPl from "../components/model/JsonPlaceholder/IPostJsonPl.ts";
import type ICommentJsonPl from "../components/model/JsonPlaceholder/ICommentJsonPl.ts";
import type {IPostDummy, PostDummy} from "../components/model/Dummyjson/IPostDummy.ts";
import type {CommentDummy, ICommentDummy} from "../components/model/Dummyjson/ICommentDummy.ts";
import type {IUserDummy, UserDummy} from "../components/model/Dummyjson/IUserDummy.ts";

export const service = {
    getJsonPlUsers: async (): Promise<IUserJsonPl[]> => {
        return await fetch(urls.users.allJsonPlUsers)
            .then(res => res.json())
    },
    getDummyUsers: async (): Promise<UserDummy[]> => {
        const response: IUserDummy = await fetch(urls.users.allDummyUsers)
            .then(res => res.json())
        return response.users
    },
    getJsonPlPosts: async (): Promise<IPostJsonPl[]> => {
        return await fetch(urls.posts.allJsonPlPosts)
            .then(res => res.json())
    },
    getDummyPosts: async (): Promise<PostDummy[]> => {
        const response: IPostDummy = await fetch(urls.posts.allDummyPosts)
            .then(res => res.json())
        return response.posts
    },
    getJsonPlComments: async (): Promise<ICommentJsonPl[]> => {
        return await fetch(urls.comments.allJsonPlComments)
            .then(res => res.json())
    },
    getDummyComments: async (): Promise<CommentDummy[]> => {
        const response: ICommentDummy = await fetch(urls.comments.allDummyComments)
            .then(res => res.json())
        return response.comments
    }
}