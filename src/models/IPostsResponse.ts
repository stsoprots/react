import type IPost from "./IPost.ts";

export interface IPostsResponse {
    posts: IPost[];
    total: number;
    skip: number;
    limit: number;
}