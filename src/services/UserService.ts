import { IUser } from '../model/IUser';
import { IUserRaw } from '../model/IUserRaw';
import { UserTransformer } from './transformers/UserTransformer';
import constants from './constants';
import { Service } from "./Service";

export class UserService extends Service<IUserRaw, IUser> {
    constructor() {
        super(constants.USERS_URL, new UserTransformer());
    }
}