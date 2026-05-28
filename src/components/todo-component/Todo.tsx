import type {FC} from "react";
import type {TodoModel} from "../../models/TodoResponseDummyjson.ts";

type TodoProps = {
    todo: TodoModel
}

export const Todo: FC<TodoProps> = ({todo: {id, todo, completed}}) => {
    return (
        <div className='card'>
            <p>{id}. {todo}: {completed.toString()}</p>
        </div>
    );
};