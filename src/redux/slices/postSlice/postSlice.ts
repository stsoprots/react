import {createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import type IPost from "../../../models/IPost.ts";
import {loadPost, loadPosts} from "../../services/api.sevice.ts";


type PostSliceType = {
    posts: IPost[];
    post: IPost | null,
    loadState: boolean
}

const initialState: PostSliceType = {posts: [], post: null, loadState: false}

loadPosts()

export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers: {
        changeLoadPost: (state, action: PayloadAction<boolean>) => {
            state.loadState = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })
            .addCase(loadPost.fulfilled, (state, action: PayloadAction<IPost>) => {
                state.post = action.payload;
            })
            .addMatcher(isFulfilled(loadPost, loadPosts), (state) => {
                state.loadState = true
            })
            .addMatcher(isRejected(loadPost, loadPosts), (state) => {
                console.log(state);
            })
})

export const postSliceActions = {
    ...postSlice.actions, loadPosts, loadPost
}