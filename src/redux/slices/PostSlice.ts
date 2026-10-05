// Імпортуємо функції createAsyncThunk, createSlice та тип PayloadAction із бібліотеки @reduxjs/toolkit
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
// Імпортуємо інтерфейс моделі даних поста IPost суто як тип TypeScript
import type {IPost} from "../../models/IPost.ts";
// Імпортуємо функцію getAll з сервісу api.service для виконання HTTP-запитів до API
import {getAll} from "../../services/api.service.ts";

// Оголошуємо тип PostSliceType для типізації структури стану слайса постів
type PostSliceType = {
    // Масив об'єктів публікацій типу IPost
    posts: IPost[]
}

// Задаємо початковий стан initialPostSliceState із порожнім масивом постів
const initialPostSliceState: PostSliceType = {posts: []};

// Створюємо асинхронний thunk loadPosts для завантаження списку постів із сервера
const loadPosts = createAsyncThunk('loadPosts', async (_, thunkAPI) => {
    // Виконуємо GET-запит на ендпоінт '/posts' із типізацією отриманих даних як IPost[]
    const posts = await getAll<IPost[]>('/posts');
    // Повертаємо успішно отримані дані постів через fulfillWithValue
    return thunkAPI.fulfillWithValue(posts);
})

// Створюємо слайс postSlice для керування станом постів
export const postSlice = createSlice({
    // Вказуємо унікальне ім'я слайса для генерації типів екшенів
    name: "postSlice",
    // Передаємо початковий стан слайса
    initialState: initialPostSliceState,
    // Порожній об'єкт синхронних редюсерів
    reducers: {},
    // Обробляємо життєвий цикл асинхронного thunk через builder у блоці extraReducers
    extraReducers: builder => builder.addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
        // Записуємо отриманий масив публікацій із action.payload у стан state.posts
        state.posts = action.payload;
    })
});

// Експортуємо об'єднаний об'єкт дій postActions, що містить екшени слайса та асинхронний thunk loadPosts
export const postActions = {...postSlice.actions, loadPosts}