import type {IComment} from "../../models/IComment.ts";
import type {FC} from "react";

type CommentPropsType = {
    comment: IComment;
}

export const CommentComponent: FC<CommentPropsType> = ({comment}) => {
    return (
        <div>{comment.id}. {comment.name}</div>
    );
};