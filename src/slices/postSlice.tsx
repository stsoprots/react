import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type IPost from "../models/IPost.ts";

type UserSliceType = {
    posts: IPost[];
}

const initialState: UserSliceType = {posts: []}

export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers: {
        loadPosts: (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        }

    }
})

export const postSliceActions = {
    ...postSlice.actions
}
