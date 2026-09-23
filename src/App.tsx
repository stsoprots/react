// ==== App.tsx ======
// 1. Керує пагінацією — зберігає ліміт та відступ (offset) у стейті для перемикання сторінок. (16-19:)
// 2. Завантажує пости — викликає хук useGetPaginatedPosts, передаючи поточні налаштування пагінації. (21-25:)
// 3. Змінює сторінку — функція handleChangePage оновлює offset у стейті та примусово перезапитує дані через refetch. (29-32:)
// 4. Відображає пости — виводить список постів або статус завантаження (Loading ...). (34-48:)
// 5. Керує навігацією — рендерить кнопки («Перша», «Попередня», «Наступна», «Остання») і блокує їх на крайніх сторінках. (49-83:)

import { Fragment, useState } from 'react';
import {useGetPaginatedPosts} from "./api/query/posts/useGetPaginatedPosts.ts";


const DEFAULT_LIMIT = 10;
const TOTAL_PAGES = 10;

const App = () => {
    const [pagination, setPagination] = useState<{ limit: number; offset: number }>({
        limit: DEFAULT_LIMIT,
        offset: 0,
    });

    const {
        isFetching: isPaginatedPostFetching,
        refetch,
        data: paginatedPosts,
    } = useGetPaginatedPosts(pagination);

    console.log(paginatedPosts);

    const handleChangePage = async (offset: number) => {
        setPagination((prevState) => ({ ...prevState, offset }));
        await refetch();
    };

    if (isPaginatedPostFetching) return <div>Loading ...</div>;

    if (!paginatedPosts) {
        return null;
    }

    return (
        <>
            {paginatedPosts.map((item) => (
                <Fragment key={item.id}>
                    <div>title: {item.title}</div>
                    <div>body: {item.body}</div>
                    <div>userId: {item.userId}</div>
                </Fragment>
            ))}
            <div>
                <button
                    onClick={() => handleChangePage(0)}
                    disabled={pagination.offset === 0}
                >
                    Перша
                </button>
                <button
                    onClick={() =>
                        handleChangePage(pagination.offset - pagination.limit)
                    }
                    disabled={pagination.offset === 0}
                >
                    Попередня
                </button>

                <span>Сторінка {pagination.offset / pagination.limit + 1}</span>

                <button
                    onClick={() =>
                        handleChangePage(pagination.offset + pagination.limit)
                    }
                    disabled={
                        pagination.offset === (TOTAL_PAGES - 1) * pagination.limit
                    }
                >
                    Наступна
                </button>
                <button
                    onClick={() =>
                        handleChangePage((TOTAL_PAGES - 1) * pagination.limit)
                    }
                    disabled={
                        pagination.offset === (TOTAL_PAGES - 1) * pagination.limit
                    }
                >
                    Остання
                </button>
            </div>
        </>
    );
};

export default App;