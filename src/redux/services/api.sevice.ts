import {createAsyncThunk} from "@reduxjs/toolkit";

export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users',)
                .then(value => value.json())
            // thunkAPI.dispatch(userSliceActions.changeLoadUser(true))

            return thunkAPI.fulfillWithValue(users);

            // throw new Error()

        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)

export const loadUser = createAsyncThunk(
    'userSlice/loadUser',
    async (id: string, thunkAPI) => {
        try {
            const user = await fetch('https://jsonplaceholder.typicode.com/users' + "/" + id,)
                .then(value => value.json());
            // thunkAPI.dispatch(userSliceActions.changeLoadUser(true))

            return thunkAPI.fulfillWithValue(user);

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
            const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(value => value.json())

            return thunkAPI.fulfillWithValue(posts);

            // throw new Error()

        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)
export const loadPost = createAsyncThunk(
    'userSlice/loadPost',
    async (id: string, thunkAPI) => {
        try {
            const post = await fetch('https://jsonplaceholder.typicode.com/posts' + "/" + id,)
                .then(value => value.json());
            // thunkAPI.dispatch(userSliceActions.changeLoadUser(true))

            return thunkAPI.fulfillWithValue(post);

            // throw new Error()

        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
)