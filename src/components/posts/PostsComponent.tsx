import {type FC, useEffect, useState} from "react";
import type {IPost} from "../model/IPost.ts";
import {postService} from "../../service/api.service.ts";
import {PostComponent} from "../post/PostComponent.tsx";

type PostsTypeProps = {
    userId: string;
}

export const PostsComponent: FC<PostsTypeProps> = ({userId}) => {

    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        if (userId) {
            console.log(userId, 'exists');
            postService
                .getAllPostsOfUserById(+userId)
                .then(value => {
                    console.log(value)
                    setPosts(value)
                })
        }
    }, [userId]);

    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} item={post}/>)
            }
        </div>
    );
};