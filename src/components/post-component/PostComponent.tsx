// Імпортуємо інтерфейс IPost (модель даних поста: id, title, body, userId) суто як тип TypeScript
import type {IPost} from "../../models/IPost.ts";
// Імпортуємо базовий дженерік-тип FC (Functional Component) з бібліотеки React для типізації компонента
import type {FC} from "react";

// Оголошуємо тип пропсів PostPropsType для типізації вхідних параметрів компонента
type PostPropsType = {
    // Обов'язкове поле post з типом даних IPost, яке передається в компонент
    post: IPost;
}

// Створюємо та експортуємо функціональний компонент PostComponent, типізований через FC<PostPropsType>, з деструктуризацією {post}
export const PostComponent: FC<PostPropsType> = ({post}) => {
    // Повертаємо TSX розмітку для рендерингу компонента
    return (
        // Рендеримо контейнер div, де виводимо id та title конкретного поста
        <div>{post.id}. {post.title}</div>
    );
};