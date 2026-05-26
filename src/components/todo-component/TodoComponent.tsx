import type ITask from "../../models/ITask.ts";
import type {FC} from "react";
import './TodoComponent.css'

type TaskPropType = {
    item: ITask
}

export const TodoComponent: FC<TaskPropType> = ({item}) => {

    return (
        <div>
            {item.id} - {item.title} - {item.completed.toString()}
        </div>
    );
};