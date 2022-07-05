import useData from "./hooks/useData";
import {IUserRaw} from "../../model/IUserRaw";
import {IUser} from "../../model/IUser";
import {UsersServiceCreator} from "../../services/UsersServiceCreator";

const serviceCreator = new UsersServiceCreator();

const Users = () => {
    const data = useData<IUserRaw, IUser>(serviceCreator);

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