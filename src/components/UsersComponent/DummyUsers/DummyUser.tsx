import type {FC} from "react";
import type {UserDummy} from "../../model/Dummyjson/IUserDummy.ts";

type UserDummyPropType = {
    user: UserDummy
}

export const DummyUser: FC<UserDummyPropType> = ({user}) => {
    return (
        <div>
            <p>{user.id}. {user.firstName} {user.lastName}</p>
            <p>email: {user.email}</p>
        </div>
    );
};