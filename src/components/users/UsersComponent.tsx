import {useEffect, useState} from "react";
import UserComponent from "../user/UserComponent.tsx";
import type {IUser} from "../model/IUser.ts";
import {userService} from "../../service/api.service.ts";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        userService.getUsers().then((allUsers) => {
            setUsers(allUsers);
        })
    }, [])
    return (
        <div>
            {users.map(user => <UserComponent key={user.id} item={user} />)}
        </div>
    );
};
export default UsersComponent;