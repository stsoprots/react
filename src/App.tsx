import './App.css'
import {useFetch} from "./hooks/useFetch.tsx";

type PropsType = {
    id: number,
    name: string
}

function App() {

    const users =
        useFetch<PropsType[]>('https://jsonplaceholder.typicode.com/users',);


    return (
        <>
            {
                users &&
                users.map((user) => (
                    <div key={user.id}>
                        {user.id}: {user.name}
                    </div>
                ))
            }
        </>
    )
}

export default App
