import { useCallback, useMemo } from "react";
import {useFetch} from "../../hooks/useFetch.tsx";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    console.log('users');

    // customHooks
    const users = useFetch();

    const arr: number[] = useMemo(() => {
        return [11, 22, 33];
    }, []);

    const foo = useCallback(() => {
        console.log('test');
    }, []);

    return (
        <div>users component
            {
                // customHooks
                users.map(value => <UserComponent item={value} foo={foo} arr={arr} />)
            }
        </div>
    );
}