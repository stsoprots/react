import {useEffect, useState} from "react";
import {service} from "../../../service/api.service.ts";
import {DummyUser} from "./DummyUser.tsx";
import type {UserDummy} from "../../model/Dummyjson/IUserDummy.ts";

export const DummyUsers = () => {

    const [users, setUsers] = useState<UserDummy[]>([]);

    useEffect(() => {
        service.getDummyUsers()
            .then((users) => {
                setUsers(users);
            })
    }, [])



    return (
        <div>
            {
                users.map((user) => (<DummyUser key={user.id} user={user} />))
            }
        </div>
    );
};