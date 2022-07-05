import { IUserRaw } from "../../model/IUserRaw";
import { IUser } from "../../model/IUser";
import {ITransformer} from "./ITransformer";

export class UserTransformer implements ITransformer<IUserRaw, IUser>{
    dehydrate (item: IUser): IUserRaw {
        return {
            id: item.id,
            name: item.name,
            username: item.userName,
            email: item.email,
            address: {
                city: item.address.city,
                street: item.address.street,
                suite: item.address.suite
            }
        };
    }
    hydrate (item: IUserRaw): IUser {
        return {
            id: item.id,
            name: item.name,
            userName: item.username,
            email: item.email,
            address: {
                city: item.address.city,
                street: item.address.street,
                suite: item.address.suite
            },
            fullAddress: item.address.city + ', ' + item.address.street + ', ' + item.address.suite
        };
    }
}