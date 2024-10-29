import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () =>
{

    const posts = useLoaderData();

    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {posts.map((post, i) => <Post key={i} post={post}/>)}
            </div>
        </div>
    );
};

export default Posts;