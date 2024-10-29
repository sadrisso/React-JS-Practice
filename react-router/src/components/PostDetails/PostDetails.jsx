import { useLoaderData } from "react-router-dom";


const PostDetails = () => {

    const post = useLoaderData();

    return (
        <div>
            <h1 className="text-center text-3xl font-bold">Post Details: {post.title}</h1>
            <p className="text-center">ID: {post.id}</p>
        </div>
    );
};

export default PostDetails;