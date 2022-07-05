import {IService} from "./IService";
import {Api, IApi} from "./api/api";
import IEntity from "../model/IEntity";
import {ITransformer} from "./transformers/ITransformer";

export class Service<T1, T2 extends IEntity> implements IService<T1, T2> {
    private _api: IApi<T1, T2>;
    private _transformer: ITransformer<T1, T2>;
    private readonly _url: string;

    constructor(url: string, transformer: ITransformer<T1, T2>) {
        this._api = new Api<T1,T2>();
        this._transformer = transformer;
        this._url = url;
    }

    getAll() {
        return this._api.getAll(this._url, this._transformer.hydrate);
    }
    get(id: number) {
        return this._api.get(this._url + '/' + id, this._transformer.hydrate);
    }
    add(data: T2) {
        return this._api.add(this._url, data, this._transformer.dehydrate);
    }
    update(data: T2) {
        return this._api.update(this._url + '/' + data.id, data, this._transformer.dehydrate);
    }
    delete(id: number) {
        return this._api.delete(this._url + '/' + id);
    }
}