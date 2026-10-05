// Імпортуємо функції createAsyncThunk, createSlice та тип PayloadAction із бібліотеки @reduxjs/toolkit
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
// Імпортуємо інтерфейс моделі даних користувача IUser суто як тип TypeScript
import type {IUser} from "../../models/IUser.ts";
// Імпортуємо допоміжну функцію getAll з сервісу api.service для виконання HTTP-запитів до API
import {getAll} from "../../services/api.service.ts";

// Оголошуємо тип UserSliceType для типізації структури стану слайса користувачів
type UserSliceType = {
    // Масив об'єктів користувачів типу IUser
    users: IUser[]
}

// Задаємо початковий стан initialUserSliceState із порожнім масивом користувачів
const initialUserSliceState: UserSliceType = {users: []};

// Створюємо асинхронний thunk loadUsers для запиту списку користувачів із сервера
const loadUsers = createAsyncThunk('loadUsers', async (_, thunkAPI) => {
    // Виконуємо GET-запит на ендпоінт '/users' з типізацією отриманих даних як IUser[]
    const users = await getAll<IUser[]>('/users');
    // Повертаємо успішно отримані дані користувачів через fulfillWithValue
    return thunkAPI.fulfillWithValue(users);
})

// Створюємо слайс userSlice для керування станом користувачів
export const userSlice = createSlice({
    // Вказуємо унікальне ім'я слайса для генерації типів екшенів
    name: "userSlice",
    // Передаємо початковий стан слайса
    initialState: initialUserSliceState,
    // Порожній об'єкт синхронних редюсерів
    reducers: {},
    // Обробляємо життєвий цикл асинхронного thunk через builder у блоці extraReducers
    extraReducers: builder => builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        // Записуємо отриманий масив користувачів із action.payload у стан state.users
        state.users = action.payload;
    })
});

// Експортуємо об'єднаний об'єкт дій userActions, що містить екшени слайса та асинхронний thunk loadUsers
export const userActions = {...userSlice.actions, loadUsers}