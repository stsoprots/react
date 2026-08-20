import type IPost from "../../models/IPost.ts";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router";
import {getPosts} from "../../service/api.service.ts";
import type {IPostsResponse} from "../../models/IPostsResponse.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([])
    const [searchParams] = useSearchParams({page: '1'})

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getPosts(currentPage).then(({posts}: IPostsResponse) => {
            setPosts(posts);
        })
    }, [searchParams])

    return (
        <div className="posts-list">
            {posts.map((post) => (<PostComponent key={post.id} post={post} />))}
        </div>
    );
};