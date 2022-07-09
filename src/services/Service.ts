import {Api, IApi} from "./api/Api";
import IEntity from "../model/IEntity";
import {ITransformer} from "./transformers/ITransformer";

export interface IService<T> {
    getAll(): Promise<T[]>,
    get(id: number): Promise<T>,
    add(data: T): Promise<T>,
    update(data: T): Promise<T>,
    delete(id: number): Promise<T>
}

export class Service<T1 extends IEntity, T2 extends IEntity> implements IService<T2> {
    private _api: IApi<T1>;
    private _transformer: ITransformer<T1, T2>;

    constructor(url: string, transformer: ITransformer<T1, T2>) {
        this._api = new Api<T1>(url);
        this._transformer = transformer;
    }

    getAll() {
        return this._api.getAll()
            .then((data: T1[]) => {
                return data.map(this._transformer.hydrate);
            });
    }

    get(id: number) {
        return this._api.get(id)
            .then(((data: T1) => {
                return this._transformer.hydrate(data);
            }));
    }

    add(data: T2) {
        return this._api.add(this._transformer.dehydrate(data))
            .then((data: T1) => {
                return this._transformer.hydrate(data);
            });
    }

    update(data: T2) {
        return this._api.update(this._transformer.dehydrate(data))
            .then((data: T1) => {
                return this._transformer.hydrate(data);
            });
    }

    delete(id: number) {
        return this._api.delete(id)
            .then((data: T1) => {
                return this._transformer.hydrate(data);
            });
    }
}