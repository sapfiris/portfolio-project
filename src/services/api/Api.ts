import axios from 'axios';
import { AxiosResponse } from 'axios';

export interface IApi<T> {
    getAll(url: string): Promise<T[]>,
    get(url: string): Promise<T>,
    add(url: string, data: T): Promise<T>,
    update(url: string, data: T): Promise<T>,
    delete(url: string): Promise<T>
}

export class Api<T> implements IApi<T> {
    getAll(url: string): Promise<T[]> {
        return axios.get<T[]>(url)
            .then((response: AxiosResponse<T[]>) => {
                return response.data;
            });
    }
    get(url: string): Promise<T> {
        return axios.get<T>(url)
            .then((response: AxiosResponse<T>) => {
                return response.data;
            });
    }
    add(url: string, data: T): Promise<T> {
        return axios.post<T>(url, data)
            .then((response: AxiosResponse<T>) => {
                return response.data;
            });
    }
    update(url: string, data: T): Promise<T> {
        return axios.put<T>(url, data)
            .then((response: AxiosResponse<T>) => {
                return response.data;
            });
    }

    delete(url: string): Promise<T> {
        return axios.delete<T>(url)
            .then((response: AxiosResponse<T>) => {
                console.log(response);
                return response.data;
            });
    }
}
