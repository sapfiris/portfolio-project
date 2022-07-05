import { IUser } from '../model/IUser';
import { IUserRaw } from '../model/IUserRaw';
import { UserTransformer } from './transformers/UserTransformer';
import constants from './constants';
import { Service } from "./Service";

const url = constants.USERS_URL;

export class UsersService extends Service<IUserRaw, IUser> {
    constructor() {
        super(url, new UserTransformer());
    }
}