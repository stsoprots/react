import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../models/IUser.ts";
import {getAll} from "../../services/api.service.ts";

type UserSliceType = {
    users: IUser[]
}

const initialUserSliceState: UserSliceType = {users: []};

const loadUsers = createAsyncThunk('loadUsers', async (_, thunkAPI) => {
    const users = await getAll<IUser[]>('/users');
    return thunkAPI.fulfillWithValue(users);
})


export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialUserSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.users = action.payload;
    })
});

export const userActions = {...userSlice.actions, loadUsers}