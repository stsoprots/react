export interface CommentResponseDummyjson {
   comments: CommentModel[];
   total: number;
   skip: number;
   limit: number;
}

export interface CommentModel {
   id: number;
   body: string;
   postId: number;
   likes: number;
   user: User;
}

export interface User {
   id: number;
   username: string;
   fullName: string;
}