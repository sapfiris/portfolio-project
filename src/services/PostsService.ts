import {Service} from "./Service";
import {IPostRaw} from "../model/IPostRaw";
import { IPost } from "../model/IPost";
import constants from "./constants";
import {PostTransformer} from "./transformers/PostTransformer";

export class PostsService extends Service<IPostRaw, IPost> {
    constructor() {
        super(constants.POSTS_URL, new PostTransformer());
    }
}