// Імпортуємо типізовані хуки dispatch і selector для безпечної роботи з Redux Toolkit
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
// Імпортуємо стандартний хук життєвого циклу useEffect для виконання побічних ефектів (запиту даних)
import {useEffect} from "react";
// Імпортуємо інтерфейс моделі коментаря як тип TypeScript для типізації елементів масиву
import type {IComment} from "../../models/IComment.ts";
// Імпортуємо об'єкт дій (екшенів) commentActions зі слайса коментарів для запуску завантаження
import {commentActions} from "../../redux/slices/CommentSlice.ts";
// Імпортуємо дочірній компонент для відображення одиничного коментаря
import {CommentComponent} from "../comment-component/CommentComponent.tsx";

// Створюємо та експортуємо функціональний компонент CommentsComponent для виведення списку коментарів
export const CommentsComponent = () => {

    // Ініціалізуємо типізовану функцію dispatch для відправки екшенів у Redux store
    const dispatch = useAppDispatch();
    // Витягуємо масив коментарів (comments) із відповідного зрізу глобального стану (commentStoreSlice)
    const comments = useAppSelector((state) => state.commentStoreSlice.comments);
    // Викликаємо useEffect для виконання дії при монтуванні компонента
    useEffect(() => {
        // Відправляємо екшен loadComments() для ініціалізації завантаження списку коментарів із сервера
        dispatch(commentActions.loadComments());
        // Передаємо порожній масив залежностей [], щоб ефект спрацював строго один раз при першому рендері
    }, [])

    // Повертаємо TSX розмітку списку коментарів
    return (
        // Рендеримо батьківський тег div як контейнер списку
        <div>
            {/* Перебираємо масив коментарів методом .map, рендеримо CommentComponent з обов'язковим унікальним key={comment.id} та пропсом comment */}
            {comments.map((comment: IComment) => (<CommentComponent key={comment.id} comment={comment} />))}
        </div>
    );
};