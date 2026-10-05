// Імпортуємо базові хуки useDispatch і useSelector з бібліотеки react-redux
import {useDispatch, useSelector} from "react-redux";
// Імпортуємо налаштований Redux store для отримання типу dispatch та стейту
import {store} from "../redux/store.ts";

// Створюємо та експортуємо типізований хук useAppDispatch, використовуючи метод withTypes на основі типу store.dispatch
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
// Створюємо та експортуємо типізований хук useAppSelector, прив'язуючи тип поверненого значення функції getState
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()