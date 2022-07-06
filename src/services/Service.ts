import {Api, IApi} from "./api/Api";
import IEntity from "../model/IEntity";
import {ITransformer} from "./transformers/ITransformer";

export interface IService<T1, T2> {
    getAll(): Promise<T2[]>,
    get(id: number): Promise<T2>,
    add(data: T2): Promise<T1>,
    update(data: T2): Promise<T1>,
    delete(id: number): Promise<T1>
}

export class Service<T1, T2 extends IEntity> implements IService<T1, T2> {
    private _api: IApi<T1>;
    private _transformer: ITransformer<T1, T2>;
    private readonly _url: string;

    constructor(url: string, transformer: ITransformer<T1, T2>) {
        this._api = new Api<T1>();
        this._transformer = transformer;
        this._url = url;
    }

    getAll() {
        return this._api.getAll(this._url)
            .then((data: T1[]) => {
                return data.map(this._transformer.hydrate);
            });
    }
    get(id: number) {
        return this._api.get(this._url + '/' + id)
            .then(((data: T1) => {
                return this._transformer.hydrate(data);
            }));
    }
    add(data: T2) {
        return this._api.add(this._url, this._transformer.dehydrate(data));
    }
    update(data: T2) {
        return this._api.update(this._url + '/' + data.id, this._transformer.dehydrate(data));
    }
    delete(id: number) {
        return this._api.delete(this._url + '/' + id);
    }
}