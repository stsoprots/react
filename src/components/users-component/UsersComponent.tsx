// Імпортуємо хук життєвого циклу useEffect для виконання побічних ефектів при монтуванні
import {useEffect} from "react";
// Імпортуємо інтерфейс моделі користувача IUser суто як тип TypeScript для типізації елементів списку
import type {IUser} from "../../models/IUser.ts";
// Імпортуємо об'єкт дій userActions зі слайса користувачів для виклику завантаження даних
import {userActions} from "../../redux/slices/UserSlice.ts";
// Імпортуємо дочірній компонент UserComponent для рендерингу окремого користувача
import {UserComponent} from "../user-component/UserComponent.tsx";
// Імпортуємо типізовані хуки dispatch і selector для безпечної взаємодії з Redux Toolkit
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";

// Створюємо та експортуємо функціональний компонент UsersComponent для відображення списку користувачів
export const UsersComponent = () => {

    // Ініціалізуємо типізовану функцію dispatch для відправки екшенів у Redux store
    const dispatch = useAppDispatch();
    // Отримуємо масив користувачів (users) із відповідного зрізу глобального стану userStoreSlice
    const users = useAppSelector((state) => state.userStoreSlice.users);
    // Викликаємо useEffect для завантаження користувачів під час першого рендерингу компонента
    useEffect(() => {
        // Відправляємо екшен loadUsers() для ініціалізації запиту до сервера
        dispatch(userActions.loadUsers());
        // Передаємо порожній масив залежностей [], щоб ефект спрацював строго один раз при монтуванні
    }, [])

    // Повертаємо TSX розмітку списку користувачів
    return (
        // Батьківський контейнер div для списку користувачів
        <div>
            {/* Ітеруємо масив users методом .map і рендеримо UserComponent з унікальним ключем key={user.id} та пропсом user */}
            {users.map((user: IUser) => (<UserComponent key={user.id} user={user} />))}
        </div>
    );
};