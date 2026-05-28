import {useEffect, useState} from "react";
import type {TodoModel} from "../../models/TodoResponseDummyjson.ts";
import {loadTodos} from "../../service/api.service.ts";
import {Todo} from "../todo-component/Todo.tsx";


export const Todos = () => {
    const [todos, setTodos] = useState<TodoModel[]>([]);
    useEffect(() => {
        async function fetchTodos() {
            const allTodos = await loadTodos();
            setTodos(allTodos);
        }

        fetchTodos();
    }, [])


    return (
        <div>
            <h1>Todos</h1>
            {
                todos.map((todo) => (<Todo key={todo.id} todo={todo} />))
            }
        </div>
    );
};