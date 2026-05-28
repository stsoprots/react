import type {FC} from "react";
import type {CommentModel} from "../../models/CommentResponseDummyjson.ts";

type CommentPropType = {
    comment: CommentModel;
}

export const Comment: FC<CommentPropType> = ({comment: {body, likes}}) => {
    return (
        <div className='card'>
            <h3>{body}</h3>
            <p>Likes: {likes}</p>
        </div>
    );
};