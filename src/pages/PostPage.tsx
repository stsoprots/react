import {useParams} from "react-router-dom";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {postSliceActions} from "../redux/slices/postSlice/postSlice.ts";

export const PostPage = () => {

    const {id} = useParams();

    const {post, loadState} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) dispatch(postSliceActions.loadPost(id));

    }, [id]);


    return (
        <div>
            {!loadState && <div>Loading</div>}
            {post && <div>{post.id}. {post.title} {post.body}<hr/></div>}
        </div>
    );
};