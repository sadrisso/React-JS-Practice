import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const PostDetails = () => {

    const post = useLoaderData();
    const navigate = useNavigate(-1)

    const handleGoBack = () => {
       navigate(-1)
    }

    return (
        <div>
            <h1 className="text-center text-3xl font-bold">Post Details: {post.title}</h1>
            <p className="text-center">ID: {post.id}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;