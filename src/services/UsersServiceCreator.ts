import {IServiceCreator} from "./IServiceCreator";
import {IUserRaw} from "../model/IUserRaw";
import {IUser} from "../model/IUser";
import {UsersService} from "./UsersService";

export class UsersServiceCreator implements IServiceCreator<IUserRaw, IUser> {
    create() {
        return new UsersService();
    }
}