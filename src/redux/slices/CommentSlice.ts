// Імпортуємо функції createAsyncThunk, createSlice та тип PayloadAction із бібліотеки @reduxjs/toolkit
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
// Імпортуємо інтерфейс моделі даних коментаря IComment суто як тип TypeScript
import type {IComment} from "../../models/IComment.ts";
// Імпортуємо функцію getAll з сервісу api.service для виконання HTTP-запитів до API
import {getAll} from "../../services/api.service.ts";

// Оголошуємо тип CommentSliceType для типізації структури стану слайса коментарів
type CommentSliceType = {
    // Масив об'єктів коментарів типу IComment
    comments: IComment[]
}

// Задаємо початковий стан initialCommentSliceState із порожнім масивом коментарів
const initialCommentSliceState: CommentSliceType = {comments: []};

// Створюємо асинхронний thunk loadComments для завантаження коментарів із сервера
const loadComments = createAsyncThunk('loadComments', async (_, thunkAPI) => {
    // Виконуємо GET-запит на ендпоінт '/comments' із типізацією отриманих даних як IComment[]
    const comments = await getAll<IComment[]>('/comments');
    // Повертаємо успішно отримані дані коментарів через fulfillWithValue
    return thunkAPI.fulfillWithValue(comments);
})

// Створюємо слайс commentSlice для керування станом коментарів
export const commentSlice = createSlice({
    // Вказуємо унікальне ім'я слайса для генерації типів екшенів
    name: "commentSlice",
    // Передаємо початковий стан слайса
    initialState: initialCommentSliceState,
    // Порожній об'єкт синхронних редюсерів
    reducers: {},
    // Обробляємо життєвий цикл асинхронного thunk через builder у блоці extraReducers
    extraReducers: builder => builder.addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
        // Записуємо отриманий масив коментарів із action.payload у стан state.comments
        state.comments = action.payload;
    })
});

// Експортуємо об'єднаний об'єкт дій commentActions, що містить екшени слайса та асинхронний thunk loadComments
export const commentActions = {...commentSlice.actions, loadComments}