import type {FC} from "react";
import type {CommentDummy} from "../../model/Dummyjson/ICommentDummy.ts";

type CommentDummyPropType = {
    comment: CommentDummy;
}

export const DummyComment:FC<CommentDummyPropType> = ({comment}) => {
    return (
        <div>
            <p>{comment.id}. {comment.body}</p>
            <p>likes: {comment.likes}</p>
        </div>
    );
};