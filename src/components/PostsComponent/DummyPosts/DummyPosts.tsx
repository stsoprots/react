import {useEffect, useState} from "react";
import {service} from "../../../service/api.service.ts";
import {DummyPost} from "./DummyPost.tsx";
import type {PostDummy} from "../../model/Dummyjson/IPostDummy.ts";

export const DummyPosts = () => {
    const [posts, setPosts] = useState<PostDummy[]>([]);

    useEffect(() => {
        service.getDummyPosts()
            .then((posts) => {
                setPosts(posts);
            })
    }, [])

    return (
        <div>
            {posts.map((post) => (<DummyPost key={post.id} post={post} />))}
        </div>
    );
};