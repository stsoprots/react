import {useAppSelector} from "../main.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {postSliceActions} from "../slices/postSlice.tsx";

export const PostsPage = () => {
    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                dispatch(postSliceActions.loadPosts(value));
            });
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