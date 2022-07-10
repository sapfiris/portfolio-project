import useData from "./hooks/useData";
import {IPost} from "../../model/IPost";
import {PostService} from "../../services/PostService";

const Posts = () => {
    const data = useData<IPost>(() => PostService.getInstance().getAll());

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