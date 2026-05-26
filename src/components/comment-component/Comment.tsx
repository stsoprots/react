import type {FC} from "react";
import type {CommentModel} from "../../models/CommentModel.ts";
import './Comment.css'


type PropType = { comment: CommentModel };
export const Comment:FC<PropType> = ({comment: {name, body}}) => {
    return (
        <div>
            <h4>{name}</h4>
            <p>{body}</p>
        </div>
    );
};