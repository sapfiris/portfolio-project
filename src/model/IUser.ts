export interface IUser {
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