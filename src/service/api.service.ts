import type ITask from "../models/ITask.ts";

const getTasks = async ():Promise<ITask[]> =>{
    return await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json())
}

const getTask = async (id:string):Promise<ITask[]> => {

    return await fetch(import.meta.env.VITE_API_URL + '/' + id)
        .then(value => value.json());
}

export {
    getTasks, getTask
}