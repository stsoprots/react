import type {FC} from "react";
import type {PostDummy} from "../../model/Dummyjson/IPostDummy.ts";

type PostDummyPropType = {
    post: PostDummy;
}

export const DummyPost: FC<PostDummyPropType> = ({post}) => {
    return (
        <div>
            <h2>{post.id}. {post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};