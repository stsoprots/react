import {useEffect, useState} from "react";
import type {CommentModel} from "../../models/CommentModel.ts";
import {loadComments} from "../../service/api.service.ts";
import {Comment} from "../comment-component/Comment.tsx";
import './Comments.css'

export const Comments = () => {

    const [comments, setComments] = useState<CommentModel[]>([]);
    useEffect(() => {
        loadComments()
            .then(value => setComments(value));
    }, [])


    return (
        <div>
            {
                comments.map((comment) => (<Comment key={comment.id} comment={comment} />))
            }
        </div>
    );
};