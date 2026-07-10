import type {FC} from "react";
import type {IUser} from "../model/IUser.ts";
import {Link} from "react-router-dom";
// import {useNavigate} from "react-router-dom"; - 2 спосіб з button


type UserTypeProps = {
    item: IUser
}
const UserComponent: FC<UserTypeProps> = ({item}) => {

    // const navigate = useNavigate()
    // const handleOnClick = () => {
    //     navigate('details', {state: item})
    // }

    return (
        <div>
            <Link to={'details'} state={item}>{item.username}</Link>

            {/*<button onClick={handleOnClick}></button>*/}
        </div>
    );
};
export default UserComponent;