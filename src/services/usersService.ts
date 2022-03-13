import { Api } from './api/api';
import { IUser } from '../model/IUser';
import { IUserRaw } from '../model/IUserRaw';
import UserTransformer from './transformers/UserTransformer';
import { IService } from "./iService";
import constants from './constants';

const url = constants.BASE_URL + '/users';

export class UsersService implements IService<IUserRaw, IUser> {
    // TODO: think if _api should be created as a Singleton
    private _api: Api<IUserRaw, IUser>;
    constructor() {
        this._api = new Api<IUserRaw, IUser>();
    }
    getAll() {
        return this._api.getAll(url, UserTransformer.hydrate);
    }
    get(id: number) {
        return this._api.get(url + '/' + id, UserTransformer.hydrate);
    }
    add(data: IUser) {
        return this._api.add(url, data, UserTransformer.dehydrate);
    }
    update(data: IUser) {
        return this._api.update(url + '/' + data.id, data, UserTransformer.dehydrate);
    }
    delete(id: number) {
        return this._api.delete(url + '/' + id);
    }
}