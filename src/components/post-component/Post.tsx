import type {FC} from "react";
import type {PostModel} from "../../models/PostResponseDummyjson.ts";

type PostProps = {
    post: PostModel
}

export const Post: FC<PostProps> = ({post: {title, body}}) => {
    return (
        <div className='card'>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};