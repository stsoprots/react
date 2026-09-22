// ==== App.tsx ======
// 1. Отримує дані — бере юзерів і стан завантаження через хук useGetUsers. (11:)
// 2. Показує спінер — поки йде запит (isFetching), виводить напис "Loading ...". (15:)
// 3. Малює список — перебирає масив users через .map і показує id та ім'я кожного юзера. (19-25:)

import './App.css'
import {useGetUsers} from "./api/query/users/useGetUsers.ts";

const App = () => {

    const {data: users, isFetching, status} = useGetUsers()

    console.log(users, status)

    if (isFetching) return <div>Loading ...</div>

    return (
        <div>
            {users?.map((user) => {
                return (
                    <div key={user.id}>
                        {user.id} --- {user.name}
                    </div>
                )
            })}

        </div>
    )
}

export default App
