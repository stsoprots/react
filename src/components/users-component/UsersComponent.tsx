import {useEffect} from "react";
import type {IUser} from "../../models/IUser.ts";
import {userActions} from "../../redux/slices/UserSlice.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";

export const UsersComponent = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userStoreSlice.users);
    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, [])

    return (
        <div>
            {users.map((user: IUser) => (<UserComponent key={user.id} user={user} />))}
        </div>
    );
};