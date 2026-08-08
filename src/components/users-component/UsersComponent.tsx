import {useEffect, useState} from "react";
import {userService} from "../../service/api.service.ts";
import type IUserResponseModel from "../../models/IUserResponseModel.ts";
import type IUser from "../../models/IUser.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        userService.getAllUsers()
            .then(({users}: IUserResponseModel) => {
                setUsers(users);
            })
    }, [])

    return (
        <div>
            {
                users.map((user) => <UserComponent key={user.id} user={user} />)
            }
        </div>
    );
};