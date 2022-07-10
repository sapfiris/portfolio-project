import {Service} from "./Service";
import {IPostRaw} from "../model/IPostRaw";
import {IPost} from "../model/IPost";
import constants from "./constants";
import {PostTransformer} from "./transformers/PostTransformer";

export class PostService extends Service<IPostRaw, IPost> {
    private static instance: PostService;

    private constructor() {
        super(constants.POSTS_URL, new PostTransformer());
    }

    static getInstance() {
        if(!PostService.instance) {
            PostService.instance = new PostService();
        }

        return PostService.instance;
    }
}