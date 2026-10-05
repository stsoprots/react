// Імпортуємо компонент CommentsComponent для відображення списку коментарів
import {CommentsComponent} from "../components/comments-component/CommentsComponent.tsx";

// Створюємо та експортуємо функціональний компонент сторінки CommentsPage
export const CommentsPage = () => {

    // Повертаємо TSX розмітку сторінки коментарів
    return (
        // Використовуємо React Fragment для групування дочірніх елементів без додавання зайвого DOM-вузла
        <>
            {/* Рендеримо компонент списку коментарів CommentsComponent */}
            <CommentsComponent/>
        </>
    );
};