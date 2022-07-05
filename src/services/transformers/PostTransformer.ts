import {IPostRaw} from "../../model/IPostRaw";
import {IPost} from "../../model/IPost";
import {ITransformer} from "./ITransformer";

export class PostTransformer implements ITransformer<IPostRaw, IPost> {
    dehydrate(item: IPost): IPostRaw {
        return {
            id: item.id,
            title: item.title
        };
    }
    hydrate(item: IPostRaw): IPost {
        return {
            id: item.id,
            title: item.title
        };
    }
}