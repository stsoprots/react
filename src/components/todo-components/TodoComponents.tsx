import type ITask from "../../models/ITask.ts";
import {type FC, useEffect, useState} from "react";
import {getTasks} from "../../service/api.service.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";
import './TodoComponents.css'

type TasksPropType = {
    item?: ITask
}

export const TodoComponents: FC <TasksPropType> = () => {


    const [tasks, setTasks] = useState<ITask[]>([]);
    useEffect(() => {
        getTasks()
            .then(tasks =>
                setTasks(tasks));
    }, []);


    return (
        <div>
            {
                tasks.map(task => <TodoComponent key={task.id} item={task} />)
            }
        </div>
    );
};
