import type IPost from "../../models/IPost.ts";

type PostComponentProps = {
    post: IPost;
}

export const PostComponent = ({post}: PostComponentProps) => {
    return <div>{post.title}</div>;
}