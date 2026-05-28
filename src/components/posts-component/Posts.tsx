import {useEffect, useState} from "react";
import type {PostModel} from "../../models/PostResponseDummyjson.ts";
import {loadPosts} from "../../service/api.service.ts";
import {Post} from "../post-component/Post.tsx";

export const Posts = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);
    useEffect(() => {
        async function fetchPosts() {
            const allPosts = await loadPosts();
            setPosts(allPosts);
        }

        fetchPosts();
    }, [])


    return (
        <div>
            <h1>Posts</h1>
            {
                posts.map((post) => (<Post key={post.id} post={post} />))
            }
        </div>
    );
};