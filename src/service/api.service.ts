import {urls} from "../constants/urls.tsx";
import type {IUser} from "../components/model/IUser.ts";

export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then(res => res.json())
    },
    getUserById: async (id: number): Promise<IUser> => {
        return await fetch(urls.users.byId(id))
            .then(res => res.json())
    }
}