import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {

    const posts = useLoaderData();

    return (
        <div>
            <h1 className="text-5xl">Posts: {posts.length}</h1>
            <div className="grid grid-cols-4">
                {posts.map((post, i) => <Post key={i} post={post}></Post>)}
            </div>
        </div>
    );
};

export default Posts;