import useData from "./hooks/useData";
import {IUser} from "../../model/IUser";
import { UserService } from "../../services/UserService";

const Users = () => {
    const data = useData<IUser>(() => UserService.getInstance().getAll());

    return (
        <div>
            <h1>Users</h1>
            {
                data.length ?
                    <ul>
                        {
                            data.map(user =>
                                <li key={user.id} > {user.id} {user.name} </li>)
                        }
                    </ul> :
                    <div>Loading...</div>
            }
        </div>
    );
};

export default Users;