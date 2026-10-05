// Імпортуємо інтерфейс IComment (опис моделі даних коментаря: id, name, email, body тощо) як виключно тип TypeScript
import type {IComment} from "../../models/IComment.ts";
// Імпортуємо базовий узагальнений тип FC (Functional Component) з бібліотеки React для типізації функціонального компонента
import type {FC} from "react";

// Оголошуємо тип пропсів компонента, який вимагає обов'язкове поле comment типу IComment
type CommentPropsType = {
    // Властивість comment передає дані конкретного коментаря для відображення
    comment: IComment;
}

// Створюємо та експортуємо іменований функціональний компонент CommentComponent, типізований через FC<CommentPropsType> з деструктуризацією пропса comment
export const CommentComponent: FC<CommentPropsType> = ({comment}) => {
    // Повертаємо TSX розмітку для відображення одного коментаря
    return (
        // Рендеримо контейнер div, у якому виводимо числовий/рядковий id та назву (ім'я) автора коментаря
        <div>{comment.id}. {comment.name}</div>
    );
};