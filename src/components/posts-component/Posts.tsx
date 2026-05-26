import {useEffect, useState} from "react";
import type {PostModel} from "../../models/PostModel.ts";
import {loadPosts} from "../../service/api.service.ts";
import {Post} from "../post-component/Post.tsx";
import './Posts.css'

export const Posts = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            const allPosts = await loadPosts();
            setPosts(allPosts);
        }

        fetchPosts()

    }, [])


    return (
        <div>
            {
                posts.map((post) => (<Post key={post.id} post={post}/>))
            }
        </div>
    );
};