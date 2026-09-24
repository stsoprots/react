// ==== App.tsx ======
// 1. Отримує першу порцію постів — викликає useGetPaginatedPosts із фіксованим лімітом 5 та відступом 0. (21-27:)
// 2. Підключає створення посту — дістає функцію createPostRequest (mutateAsync) через хук useCreatePost. (29:)
// 3. Створює новий пост — через useCallback відправляє тестовий пост (title, body, userId: '1'). (37-45:)
// 4. Відображає стан завантаження — виводить "Loading ...", доки триває запит. (47:)
// 5. Малює список і кнопку — рендерить поля постів (id, title, body, userId) та кнопку для відправки нового поста. (55-63:)

import './App.css';
import { Fragment, useCallback } from 'react';
import { useGetPaginatedPosts } from './api/query/posts/useGetPaginatedPosts.ts';
import { useCreatePost } from './api/mutations/posts/useCreatePost.ts';

const DEFAULT_LIMIT = 5;

const App = () => {
    // const [pagination, setPagination] = useState<{ limit: number; offset: number }>({
    //   limit: DEFAULT_LIMIT,
    //   offset: 0,
    // });

    const {
        isFetching: isPaginatedPostFetching,
        data: paginatedPosts,
    } = useGetPaginatedPosts({
        limit: DEFAULT_LIMIT,
        offset: 0,
    });

    const { mutateAsync: createPostRequest } = useCreatePost();
    // console.log(paginatedPosts);

    // const handleChangePage = async (offset: number) => {
    //   setPagination((prevState) => ({ ...prevState, offset }));
    //   await refetch();
    // };

    const handleCreatePost = useCallback(
        async () =>
            await createPostRequest({
                title: 'Title test',
                body: 'body test',
                userId: '1',
            }),
        []
    );

    if (isPaginatedPostFetching) return <div>Loading ...</div>;

    if (!paginatedPosts) {
        return null;
    }

    return (
        <>
            {paginatedPosts.map((item) => (
                <Fragment key={item.id}>
                    <div>id: {item.id}</div>
                    <div>title: {item.title}</div>
                    <div>body: {item.body}</div>
                    <div>userId: {item.userId}</div>
                </Fragment>
            ))}
            <button onClick={handleCreatePost}>Create new post</button>
            {/* <div>
        <button onClick={() => handleChangePage(0)} disabled={pagination.offset === 0}>
          Перша
        </button>
        <button
          onClick={() => handleChangePage(pagination.offset - pagination.limit)}
          disabled={pagination.offset === 0}
        >
          Попередня
        </button>

        <span>Сторінка {pagination.offset / pagination.limit + 1}</span>

        <button
          onClick={() => handleChangePage(pagination.offset + pagination.limit)}
          disabled={pagination.offset === (TOTAL_PAGES - 1) * pagination.limit}
        >
          Наступна
        </button>
        <button
          onClick={() => handleChangePage((TOTAL_PAGES - 1) * pagination.limit)}
          disabled={pagination.offset === (TOTAL_PAGES - 1) * pagination.limit}
        >
          Остання
        </button>
      </div> */}
        </>
    );
};

export default App;