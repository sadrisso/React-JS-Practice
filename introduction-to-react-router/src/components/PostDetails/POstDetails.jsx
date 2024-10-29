import { useLoaderData } from "react-router-dom";


const POstDetails = () =>
{
    const post = useLoaderData();

    return (
        <div>
            <h2 className="text-5xl">{post.title}</h2>
            <p className="text-2xl">{post.id}</p>
        </div>
    );
};

export default POstDetails;