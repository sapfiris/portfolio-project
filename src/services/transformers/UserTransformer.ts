import { IUserRaw } from "../../model/IUserRaw";
import { IUser } from "../../model/IUser";

export default {
    dehydrate,
    hydrate
}

function dehydrate(data: IUser): IUserRaw {
    return {
        id: data.id,
        name: data.name,
        username: data.userName,
        email: data.email,
        address: {
            city: data.address.city,
            street: data.address.street,
            suite: data.address.suite
        }
    };
}

function hydrate(data: IUserRaw): IUser {
    return {
        id: data.id,
        name: data.name,
        userName: data.username,
        email: data.email,
        address: {
            city: data.address.city,
            street: data.address.street,
            suite: data.address.suite
        },
        fullAddress: data.address.city + ', ' + data.address.street + ', ' + data.address.suite
    };
}