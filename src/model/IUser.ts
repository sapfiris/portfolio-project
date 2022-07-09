import IEntity from "./IEntity";

export interface IUser extends IEntity{
    id?: number,
    name: string,
    userName: string,
    email: string,
    address: {
        city: string,
        street: string,
        suite: string
    },
    fullAddress: string
}