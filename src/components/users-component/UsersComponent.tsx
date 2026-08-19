import {useEffect, useState} from "react";
import type IUser from "../../models/IUser.ts";
import {getUsers} from "../../service/api.service.ts";
import {useSearchParams} from "react-router";
import type {IUsersResponse} from "../../models/IUsersResponse.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [searchParams] = useSearchParams({page: '1'});

    useEffect(() => {
        const currentPage = searchParams.get("page") || '1';
        getUsers(currentPage).then(({users}: IUsersResponse) => {
            setUsers(users);
        })
    }, [searchParams])


    return (
        <div>
            {users.map((user: IUser) => (<UserComponent key={user.id} user={user} />))}
        </div>
    );
};