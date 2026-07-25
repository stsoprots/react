export interface Reactions {
   likes: number;
   dislikes: number;
}

export interface PostDummy {
   id: number;
   title: string;
   body: string;
   tags: string[];
   reactions: Reactions;
   views: number;
   userId: number;
}

export interface IPostDummy {
   posts: PostDummy[];
   total: number;
   skip: number;
   limit: number;
}