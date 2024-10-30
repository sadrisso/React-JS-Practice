import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const POstDetails = () =>
{
    const post = useLoaderData();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="border border-red-600 w-1/3 mx-auto mt-10 p-4 rounded-xl">
            <h2 className="text-3xl">{post.title}</h2>
            <p className="text-xl">{post.id}</p>
            <button onClick={handleBack} className="btn btn-primary">Go Back</button>
        </div>
    );
};

export default POstDetails;