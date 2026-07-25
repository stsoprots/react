import type IUserJsonPl from "../../model/JsonPlaceholder/IUserJsonPl.ts";
import {useEffect, useState} from "react";
import {service} from "../../../service/api.service.ts";
import {JsonUser} from "./JsonUser.tsx";

export const JsonUsers = () => {

    const [users, setUsers] = useState<IUserJsonPl[]>([]);

    useEffect(() => {
        service.getJsonPlUsers()
            .then(users => {
                setUsers(users)
            })
    },[])

    return (
        <div>
            {
                users.map((user) => (<JsonUser key={user.id} user={user} />))
            }
        </div>
    );
};