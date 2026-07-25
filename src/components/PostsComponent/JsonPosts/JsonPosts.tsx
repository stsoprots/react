import {useEffect, useState} from "react";
import {service} from "../../../service/api.service.ts";
import type IPostJsonPl from "../../model/JsonPlaceholder/IPostJsonPl.ts";
import {JsonPost} from "./JsonPost.tsx";

export const JsonPosts = () => {

    const [posts, setPosts] = useState<IPostJsonPl[]>([]);

    useEffect(() => {
        service.getJsonPlPosts()
            .then(posts => {
                setPosts(posts)
            })
    },[])

    return (
        <div>
            {
                posts.map((post) => (<JsonPost key={post.id} post={post} />))
            }
        </div>
    );
};