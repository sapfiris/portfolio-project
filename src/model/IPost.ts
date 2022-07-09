import IEntity from "./IEntity";

export interface IPost extends IEntity {
    id?: number,
    title: string
}