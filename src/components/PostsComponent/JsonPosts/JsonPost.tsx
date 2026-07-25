import type {FC} from "react";
import type IPostJsonPl from "../../model/JsonPlaceholder/IPostJsonPl.ts";

type PostJsonPlPropType = {
    post: IPostJsonPl
}

export const JsonPost:FC<PostJsonPlPropType> = ({post}) => {
    return (
        <div>
           <h2>{post.id}. {post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};