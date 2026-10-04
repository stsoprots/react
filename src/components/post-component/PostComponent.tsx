import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";

type PostPropsType = {
    post: IPost;
}

export const PostComponent: FC<PostPropsType> = ({post}) => {
    return (
        <div>{post.id}. {post.title}</div>
    );
};