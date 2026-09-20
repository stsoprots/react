import {createAsyncThunk} from "@reduxjs/toolkit";

export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users',)
                .then(value => value.json())

            return thunkAPI.fulfillWithValue(users);

            // throw new Error()

        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)

export const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await fetch('https://jsonplaceholder.typicode.com/posts',)
                .then(value => value.json())

            return thunkAPI.fulfillWithValue(posts);

            // throw new Error()

        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)