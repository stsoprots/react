export interface PostResponseDummyjson {
    posts: PostModel[];
    skip: number,
    total: number,
    limit: number
}

export interface PostModel {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: Reactions;
    views: number;
    userId: number;
}

export interface Reactions {
    likes: number;
    dislikes: number;
}



