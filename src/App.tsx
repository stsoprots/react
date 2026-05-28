import './App.css'
import {Posts} from "./components/posts-component/Posts.tsx";
import {Todos} from "./components/todos-component/Todos.tsx";
import {Comments} from "./components/comments-component/Comments.tsx";
import {useState} from "react";
import './App.css'

function App() {
    const [screen, setScreen] = useState(0);

    return (
        <div className="app">
            <div className="buttons">

                <button onClick={() => setScreen(1)}>
                    Posts
                </button>

                <button onClick={() => setScreen(2)}>
                    Todos
                </button>

                <button onClick={() => setScreen(3)}>
                    Comments
                </button>
            </div>

            <div className='content'>
                {screen === 1 && <Posts/>}
                {screen === 2 && <Todos/>}
                {screen === 3 && <Comments/>}
            </div>
        </div>
    )
}

export default App
