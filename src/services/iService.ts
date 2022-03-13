export interface IService<T1, T2> {
    getAll(): Promise<T2[]>,
    get(id: number): Promise<T2>,
    add(data: T2): Promise<T1>,
    update(data: T2): Promise<T1>,
    delete(id: number): Promise<T1>
}