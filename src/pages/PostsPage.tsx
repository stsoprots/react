// Імпортуємо компонент PostsComponent для відображення списку постів
import {PostsComponent} from "../components/posts-component/PostsComponent.tsx";

// Створюємо та експортуємо функціональний компонент сторінки PostsPage
export const PostsPage = () => {

    // Повертаємо TSX розмітку сторінки постів
    return (
        // Використовуємо React Fragment для групування дочірніх елементів без додаткового DOM-вузла
        <>
            {/* Рендеримо компонент списку постів PostsComponent */}
            <PostsComponent/>
        </>
    );
};