import type {FC} from "react";
import type {IPost} from "../model/IPost.ts";

type PostPropType = {
    item: IPost;
}

export const PostComponent: FC<PostPropType> = ({item}) => {
    return (
        <div>{item.title}</div>
    );
};