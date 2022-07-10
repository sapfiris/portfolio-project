import { IUser } from '../model/IUser';
import { IUserRaw } from '../model/IUserRaw';
import { UserTransformer } from './transformers/UserTransformer';
import constants from './constants';
import { Service } from "./Service";

export class UserService extends Service<IUserRaw, IUser> {
    private static instance: UserService;

    private constructor() {
        super(constants.USERS_URL, new UserTransformer());
    }

    static getInstance() {
        if(!UserService.instance) {
            UserService.instance = new UserService();
        }

        return UserService.instance;
    }
}