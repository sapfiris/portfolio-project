export interface IUserRaw {
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