import type {IUser} from "../../../models/IUser.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {loadUsers} from "../../services/api.sevice.ts";

type UserSliceType = {
    users: IUser[];
}

const initialState: UserSliceType = {users: []}

loadUsers()

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        })
            .addCase(loadUsers.rejected, (state, action: PayloadAction<IUser[]>) => {
                console.log(state);
                console.log(action);
            })
})

export const userSliceActions = {
    ...userSlice.actions, loadUsers
}