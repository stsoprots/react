import {useEffect, useState} from "react";
import type {CommentModel} from "../../models/CommentResponseDummyjson.ts";
import {loadComments} from "../../service/api.service.ts";
import {Comment} from "../comment-component/Comment.tsx";

export const Comments = () => {

    const [comments, setComments] = useState<CommentModel[]>([]);
    useEffect(() => {
        async function fetchComments() {
            const allComments = await loadComments();
            setComments(allComments);
        }

        fetchComments();
    })

    return (
        <div>
            <h1>Comments</h1>
            {
                comments.map((comment) => (<Comment key={comment.id} comment={comment} />))
            }
        </div>
    );
};