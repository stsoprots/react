// Імпортуємо функцію configureStore з бібліотеки @reduxjs/toolkit для конфігурації Redux сховища
import {configureStore} from "@reduxjs/toolkit";
// Імпортуємо слайс користувачів userSlice для підключення його редюсера
import {userSlice} from "./slices/UserSlice.ts";
// Імпортуємо слайс публікацій postSlice для підключення його редюсера
import {postSlice} from "./slices/PostSlice.ts";
// Імпортуємо слайс коментарів commentSlice для підключення його редюсера
import {commentSlice} from "./slices/CommentSlice.ts";

// Створюємо та експортуємо єдине глобальне сховище стану Redux store
export const store = configureStore({
    // Об'єкт reducer визначає структуру кореневого стану та підключає редюсери для кожного слайса
    reducer: {
        // Редюсер для керування гілкою стану користувачів
        userStoreSlice: userSlice.reducer,
        // Редюсер для керування гілкою стану публікацій
        postStoreSlice: postSlice.reducer,
        // Редюсер для керування гілкою стану коментарів
        commentStoreSlice: commentSlice.reducer,
    }
})