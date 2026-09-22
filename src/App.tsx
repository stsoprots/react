// ==== App.tsx ======
// 1. Керує полями вводу — зберігає текст заголовка та тіла нового поста у стейті. (14-15:)
// 2. Підключає хуки — завантажує юзерів (useGetUsers) та бере функцію створення поста (useCreatePost). (17-19:)
// 3. Відправляє форму — по кліку запускає мутацію (mutateAsync) з ID обраного юзера та текстом з інпутів. (23-36:)
// 4. Показує завантаження або результат — виводить "Loading ...", а після успішного створення показує створений пост. (38-48:)
// 5. Малює інтерфейс — рендерить список юзерів із кнопками та два інпути для заповнення поста. (51-65:)

import './App.css';

import { useGetUsers } from './api/query/users/useGetUsers.ts';
import { useCreatePost } from './api/mutations/posts/useCreatePost.ts';
import { useState } from 'react';

const App = () => {
    const [postTitle, setPostTitle] = useState<string>('');
    const [postBody, setPostBody] = useState<string>('');

    const { data: users, isFetching } = useGetUsers();

    const { mutateAsync, data: post } = useCreatePost();

    console.log({ postTitle, postBody });

    const handleCreatePost = async ({ userId }: { userId: string }) => {
        try {
            const response = await mutateAsync({ userId, body: postBody, title: postTitle });

            if (response) {
                console.log(response);

                return;
            }

            console.log('No response');
        } catch (e) {
            console.error(e);
        }
    };

    if (isFetching) return <div>Loading ...</div>;

    if (post) {
        return (
            <>
                <div>{post.id}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
                <div>{post.userId}</div>
            </>
        );
    }

    return (
        <div>
            {users?.map((user) => {
                return (
                    <div key={user.id}>
                        {user.id} --- {user.name}
                        <button onClick={async () => await handleCreatePost({ userId: user.id })}>
                            Create post by user id
                        </button>
                    </div>
                );
            })}

            <input value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
            <input value={postBody} onChange={(e) => setPostBody(e.target.value)} />
        </div>
    );
};

export default App;