// Імпортуємо типізовані хуки dispatch і selector для безпечної взаємодії з Redux Toolkit
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks.ts";
// Імпортуємо хук життєвого циклу useEffect для виконання побічних ефектів
import { useEffect } from "react";
// Імпортуємо набір екшенів userActions зі слайса користувачів для виклику завантаження даних
import { userActions } from "../redux/slices/UserSlice.ts";
// Імпортуємо набір екшенів postActions зі слайса постів для виклику завантаження даних
import { postActions } from "../redux/slices/PostSlice.ts";
// Імпортуємо набір екшенів commentActions зі слайса коментарів для виклику завантаження даних
import { commentActions } from "../redux/slices/CommentSlice.ts";
// Імпортуємо компонент UserComponent для рендерингу окремого користувача
import { UserComponent } from "../components/user-component/UserComponent.tsx";
// Імпортуємо компонент PostComponent для рендерингу окремого поста
import { PostComponent } from "../components/post-component/PostComponent.tsx";
// Імпортуємо компонент CommentComponent для рендерингу окремого коментаря
import { CommentComponent } from "../components/comment-component/CommentComponent.tsx";

// Створюємо та експортуємо функціональний компонент комплексної сторінки ComplexPage
export const ComplexPage = () => {
    // Ініціалізуємо типізовану функцію dispatch для надсилання екшенів у Redux store
    const dispatch = useAppDispatch();

    // Отримуємо масив користувачів із глобального стану userStoreSlice
    const users = useAppSelector((state) => state.userStoreSlice.users);
    // Отримуємо масив постів із глобального стану postStoreSlice
    const posts = useAppSelector((state) => state.postStoreSlice.posts);
    // Отримуємо масив коментарів із глобального стану commentStoreSlice
    const comments = useAppSelector((state) => state.commentStoreSlice.comments);

    // Викликаємо useEffect для перевірки наявності даних та їх завантаження за потреби
    useEffect(() => {
        // Перевіряємо, чи масив користувачів порожній, і відправляємо екшен loadUsers()
        if (users.length === 0) {
            dispatch(userActions.loadUsers());
        }
        // Перевіряємо, чи масив постів порожній, і відправляємо екшен loadPosts()
        if (posts.length === 0) {
            dispatch(postActions.loadPosts());
        }
        // Перевіряємо, чи масив коментарів порожній, і відправляємо екшен loadComments()
        if (comments.length === 0) {
            dispatch(commentActions.loadComments());
        }
        // Вказуємо залежності ефекту для коректного реагування на зміни довжини масивів
    }, [dispatch, users.length, posts.length, comments.length]);

    // Перевіряємо, чи хоча б один масив даних ще не завантажився
    if (!users.length || !posts.length || !comments.length) {
        // Рендеримо блок із повідомленням про процес завантаження даних
        return <div>Завантаження даних...</div>;
    }

    // Повертаємо TSX розмітку для виведення зв'язаних даних
    return (
        // Головний контейнер div для списку користувачів та їх контенту
        <div>
            {/* Ітеруємо масив користувачів методом .map для відображення кожного автора */}
            {users.map((user) => (
                // Контейнер div для окремого користувача з унікальним ключем key={user.id}
                <div key={user.id}>
                    {/* Заголовок рівня h3 для блоку користувача */}
                    <h3>
                        {/* Текстова мітка та дочірній компонент UserComponent з переданим пропсом user */}
                        Користувач: <UserComponent user={user}/>
                    </h3>

                    {/* Підзаголовок рівня h4 для секції постів цього користувача */}
                    <h4>Пост:</h4>
                    {/* Фільтруємо масив постів за відповідністю userId до user.id */}
                    {posts
                        .filter((post) => post.userId === user.id)
                        // Ітеруємо відфільтровані пости та рендеримо кожен пост
                        .map((post) => (
                            // Контейнер div для публікації з унікальним ключем key={post.id}
                            <div key={post.id}>
                                {/* Рендеримо компонент PostComponent з переданим пропсом post */}
                                <PostComponent post={post}/>

                                {/* Заголовок рівня h6 для секції коментарів під постом */}
                                <h6>Коментарі:</h6>
                                {/* Фільтруємо коментарі за відповідністю postId до post.id */}
                                {comments
                                    .filter((comment) => comment.postId === post.id)
                                    // Ітеруємо відфільтровані коментарі та рендеримо кожен окремо
                                    .map((comment) => (
                                        // Контейнер div для коментаря з унікальним ключем key={comment.id}
                                        <div key={comment.id}>
                                            {/* Рендеримо компонент CommentComponent з переданим пропсом comment */}
                                            <CommentComponent comment={comment}/>
                                        </div>
                                    ))}
                            </div>
                        ))}
                </div>
            ))}
        </div>
    );
}