import IEntity from "./IEntity";

export interface IUserRaw extends IEntity {
    id?: number,
    name: string,
    username: string,
    email: string,
    address: {
        city: string,
        street: string,
        suite: string
    }
}