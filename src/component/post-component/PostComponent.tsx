import type {FC} from "react";
import type IPost from "../../models/IPost.ts";

type PostTypeProps = {
    post: IPost
}

export const PostComponent: FC<PostTypeProps> = ({post}) => {
    return (
        <div className="post-card">
            <h3>{post.id} {post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};