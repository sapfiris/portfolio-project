export interface ITransformer<T1, T2> {
    dehydrate (item: T2): T1,
    hydrate (item: T1): T2
};