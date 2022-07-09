import axios from 'axios';
import { AxiosResponse } from 'axios';
import IEntity from "../../model/IEntity";

export interface IApi<T> {
    getAll(): Promise<T[]>,
    get(id: number): Promise<T>,
    add(data: T): Promise<T>,
    update(data: T): Promise<T>,
    delete(id: number): Promise<T>
}

export class Api<T extends IEntity> implements IApi<T> {
    private _url: string;

    constructor(url: string) {
        this._url = url;
    }

    getAll(): Promise<T[]> {
        return axios.get<T[]>(this._url)
            .then((response: AxiosResponse<T[]>) => {
                return response.data;
            });
    }

    get(id: number): Promise<T> {
        return axios.get<T>(this._url + '/' + id)
            .then((response: AxiosResponse<T>) => {
                return response.data;
            });
    }

    add<T>(data: T): Promise<T> {
        return axios.post<T>(this._url, data)
            .then((response: AxiosResponse<T>) => {
                return response.data;
            });
    }

    update(data: T): Promise<T> {
        return axios.put<T>(this._url + '/' + data.id, data)
            .then((response: AxiosResponse<T>) => {
                return response.data;
            });
    }

    delete(id: number): Promise<T> {
        return axios.delete<T>(this._url + '/' + id)
            .then((response: AxiosResponse<T>) => {
                return response.data;
            });
    }
}
