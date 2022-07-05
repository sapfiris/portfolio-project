import useData from "./hooks/useData";
import {IPostRaw} from "../../model/IPostRaw";
import {IPost} from "../../model/IPost";
import { PostsServiceCreator } from "../../services/PostsServiceCreator";

const serviceCreator = new PostsServiceCreator();

const Posts = () => {
    const data = useData<IPostRaw, IPost>(serviceCreator);

    return (
        <div>
            <h1>Posts</h1>
            {
                data.length ?
                    data.map(item => (<div key={item.id}>{ item.title }</div>)) :
                    <div>Loading...</div>
            }
        </div>
    );
};

export default Posts;