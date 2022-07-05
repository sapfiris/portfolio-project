import { IService } from "./IService";

export interface IServiceCreator<T1, T2> {
    create: () => IService<T1, T2>
}