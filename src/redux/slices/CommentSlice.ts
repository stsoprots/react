import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IComment} from "../../models/IComment.ts";
import {getAll} from "../../services/api.service.ts";

type CommentSliceType = {
    comments: IComment[]
}

const initialCommentSliceState: CommentSliceType = {comments: []};

const loadComments = createAsyncThunk('loadComments', async (_, thunkAPI) => {
    const comments = await getAll<IComment[]>('/comments');
    return thunkAPI.fulfillWithValue(comments);
})


export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: initialCommentSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
        state.comments = action.payload;
    })
});

export const commentActions = {...commentSlice.actions, loadComments}