import type {FC} from "react";
import type ICommentJsonPl from "../../model/JsonPlaceholder/ICommentJsonPl.ts";

type CommentJsonPlPropType = {
    comment: ICommentJsonPl
}

export const JsonComment:FC<CommentJsonPlPropType> = ({comment}) => {
    return (
        <div>
            <h2>{comment.id}. {comment.name}</h2>
            <p>{comment.body}</p>
        </div>
    );
};