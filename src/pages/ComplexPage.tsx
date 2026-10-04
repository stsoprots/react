import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks.ts";
import { useEffect } from "react";
import { userActions } from "../redux/slices/UserSlice.ts";
import { postActions } from "../redux/slices/PostSlice.ts";
import { commentActions } from "../redux/slices/CommentSlice.ts";
import { UserComponent } from "../components/user-component/UserComponent.tsx";
import { PostComponent } from "../components/post-component/PostComponent.tsx";
import { CommentComponent } from "../components/comment-component/CommentComponent.tsx";

export const ComplexPage = () => {
    const dispatch = useAppDispatch();

    const users = useAppSelector((state) => state.userStoreSlice.users);
    const posts = useAppSelector((state) => state.postStoreSlice.posts);
    const comments = useAppSelector((state) => state.commentStoreSlice.comments);

    useEffect(() => {
        if (users.length === 0) {
            dispatch(userActions.loadUsers());
        }
        if (posts.length === 0) {
            dispatch(postActions.loadPosts());
        }
        if (comments.length === 0) {
            dispatch(commentActions.loadComments());
        }
    }, [dispatch, users.length, posts.length, comments.length]);

    if (!users.length || !posts.length || !comments.length) {
        return <div>Завантаження даних...</div>;
    }

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h3>
                        Користувач: <UserComponent user={user}/>
                    </h3>

                    <h4>Пост:</h4>
                    {posts
                        .filter((post) => post.userId === user.id)
                        .map((post) => (
                            <div key={post.id}>
                                <PostComponent post={post}/>

                                <h6>Коментарі:</h6>
                                {comments
                                    .filter((comment) => comment.postId === post.id)
                                    .map((comment) => (
                                        <div key={comment.id}>
                                            <CommentComponent comment={comment}/>
                                        </div>
                                    ))}
                            </div>
                        ))}
                </div>
            ))}
        </div>
    );
}