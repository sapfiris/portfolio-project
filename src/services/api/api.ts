import axios from 'axios';
import { AxiosResponse } from 'axios';

export interface IApi<T1, T2> {
    getAll(url: string, transformer: (item: T1) => T2): Promise<T2[]>,
    get(url: string, transformer: (item: T1) => T2): Promise<T2>,
    add(url: string, data: T2, transformer: (item: T2) => T1): Promise<T1>,
    update(url: string, data: T2, transformer: (item: T2) => T1): Promise<T1>,
    delete(url: string): Promise<T1>
}

export class Api<T1, T2> implements IApi<T1, T2> {
    getAll(url: string, transformer: (item: T1) => T2): Promise<T2[]> {
        return axios.get<T1[]>(url)
            .then((response: AxiosResponse<T1[]>) => {
                return response.data;
            })
            .then((data: T1[]) => {
                return data.map(transformer);
            });
    }
    get(url: string, transformer: (item: T1) => T2): Promise<T2> {
        return axios.get<T1>(url)
            .then((response: AxiosResponse<T1>) => {
                return response.data;
            })
            .then(((data: T1) => {
                return transformer(data);
            }));
    }
    add(url: string, data: T2, transformer: (item: T2) => T1): Promise<T1> {
        return axios.post<T1>(url, transformer(data))
            .then((response: AxiosResponse<T1>) => {
                return response.data;
            });
    }
    update(url: string, data: T2, transformer: (item: T2) => T1): Promise<T1> {
        return axios.put<T1>(url, transformer(data))
            .then((response: AxiosResponse<T1>) => {
                return response.data;
            });
    }

    delete(url: string): Promise<T1> {
        return axios.delete<T1>(url)
            .then((response: AxiosResponse<T1>) => {
                console.log(response);
                return response.data;
            });
    }
}
