import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
import {useEffect} from "react";
import type {IComment} from "../../models/IComment.ts";
import {commentActions} from "../../redux/slices/CommentSlice.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";


export const CommentsComponent = () => {

    const dispatch = useAppDispatch();
    const comments = useAppSelector((state) => state.commentStoreSlice.comments);
    useEffect(() => {
        dispatch(commentActions.loadComments());
    }, [])

    return (
        <div>
            {comments.map((comment: IComment) => (<CommentComponent key={comment.id} comment={comment} />))}
        </div>
    );
};