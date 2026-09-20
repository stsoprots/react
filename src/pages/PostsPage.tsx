import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {postSliceActions} from "../redux/slices/postSlice/postSlice.ts";


export const PostsPage = () => {
    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postSliceActions.loadPosts())
    }, []);


    return (
        <div>
            {
                posts.map((post, index) => {
                    return <div key={index}><div><b>{post.title}</b></div><div>{post.body}</div><hr/></div>
                })
            }
        </div>
    );
};