// Імпортуємо інтерфейс IUser (модель даних користувача: id, name, username, email тощо) суто як тип TypeScript
import type {IUser} from "../../models/IUser.ts";
// Імпортуємо базовий узагальнений тип FC (Functional Component) з бібліотеки React для типізації функціонального компонента
import type {FC} from "react";

// Оголошуємо тип пропсів UserPropsType для типізації вхідних параметрів компонента
type UserPropsType = {
    // Обов'язкове поле user з типом даних IUser, яке передається в компонент
    user: IUser;
}

// Створюємо та експортуємо іменований функціональний компонент UserComponent, типізований через FC<UserPropsType>, з деструктуризацією {user}
export const UserComponent: FC<UserPropsType> = ({user}) => {
    // Повертаємо TSX розмітку для рендерингу компонента
    return (
        // Рендеримо контейнер div, у якому виводимо числовий id та ім'я користувача
        <div>{user.id}. {user.name}</div>
    );
};