export interface User {
   id: number;
   username: string;
   fullName: string;
}

export interface CommentDummy {
   id: number;
   body: string;
   postId: number;
   likes: number;
   user: User;
}

export interface ICommentDummy {
   comments: CommentDummy[];
   total: number;
   skip: number;
   limit: number;
}