import {IServiceCreator} from "./IServiceCreator";
import {IPostRaw} from "../model/IPostRaw";
import {IPost} from "../model/IPost";
import {PostsService} from "./PostsService";

export class PostsServiceCreator implements IServiceCreator<IPostRaw, IPost> {
    create() {
        return new PostsService();
    }
}