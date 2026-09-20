import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {Provider, useSelector} from "react-redux";
import {router} from "./router/router.tsx";
import type {IUser} from "./models/IUser.ts";
import {configureStore, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {postSlice} from "./slices/postSlice.tsx";

type UserSliceType = {
    users: IUser[];
}

const initialState: UserSliceType = {users: []}

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        loadUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        }

    }
})

export const userSliceActions = {
    ...userSlice.actions
}

const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    }
})

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
