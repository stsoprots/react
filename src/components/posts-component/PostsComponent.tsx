// Імпортуємо типізовані хуки dispatch і selector для безпечної взаємодії з Redux Toolkit
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
// Імпортуємо хук життєвого циклу useEffect для виконання побічних ефектів при монтуванні
import {useEffect} from "react";
// Імпортуємо об'єкт дій postActions зі слайса постів для виклику завантаження даних
import {postActions} from "../../redux/slices/PostSlice.ts";
// Імпортуємо інтерфейс IPost суто як тип TypeScript для типізації елементів масиву
import type {IPost} from "../../models/IPost.ts";
// Імпортуємо дочірній компонент PostComponent для рендерингу окремого поста
import {PostComponent} from "../post-component/PostComponent.tsx";

// Створюємо та експортуємо функціональний компонент PostsComponent для відображення списку постів
export const PostsComponent = () => {

    // Ініціалізуємо типізовану функцію dispatch для надсилання екшенів у Redux store
    const dispatch = useAppDispatch();
    // Отримуємо масив постів (posts) із відповідного зрізу глобального стану postStoreSlice
    const posts = useAppSelector((state) => state.postStoreSlice.posts);
    // Викликаємо useEffect для завантаження постів під час монтування компонента
    useEffect(() => {
        // Відправляємо екшен loadPosts() для запиту списку публікацій
        dispatch(postActions.loadPosts());
        // Передаємо порожній масив залежностей [], щоб дія виконалася один раз при старті
    }, [])

    // Повертаємо TSX розмітку списку постів
    return (
        // Батьківський контейнер div для списку компонентів
        <div>
            {/* Ітеруємо масив posts методом .map і рендеримо PostComponent із обов'язковим ключем key={post.id} та пропсом post */}
            {posts.map((post: IPost) => (<PostComponent key={post.id} post={post} />))}
        </div>
    );
};