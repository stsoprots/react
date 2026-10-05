// Імпортуємо компонент UsersComponent для відображення списку користувачів
import {UsersComponent} from "../components/users-component/UsersComponent.tsx";

// Створюємо та експортуємо функціональний компонент сторінки UsersPage
export const UsersPage = () => {

    // Повертаємо TSX розмітку сторінки користувачів
    return (
        // Використовуємо React Fragment для групування дочірніх елементів без додаткового DOM-вузла
        <>
            {/* Рендеримо компонент списку користувачів UsersComponent */}
            <UsersComponent/>
        </>
    );
};