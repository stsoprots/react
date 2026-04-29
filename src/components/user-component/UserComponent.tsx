import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

type UserPropType = {
    item: IUser,
    foo: (item:IUser) => void
}

export const UserComponent: FC<UserPropType> = ({item, foo}) => {
    return (
        <>
            <div>{item.name}</div>
            <button onClick={() => {
                foo(item)
            }}>details</button>
        </>

    );
};