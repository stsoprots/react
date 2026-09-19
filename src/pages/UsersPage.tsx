import {useAppSelector, userSliceActions} from "../main.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const UsersPage = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                dispatch(userSliceActions.loadUsers(value));
        });
    }, []);

    return (
        <div>
            {
                users.map((user) => {
                    return <div key={user.id}>{user.name}</div>
                })
            }
        </div>
    );
};