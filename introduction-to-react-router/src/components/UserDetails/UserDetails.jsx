import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const UserDetails = () =>
{
    const user = useLoaderData();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }

    const {name, email} = user;

    return (
        <div className="border border-teal-600 rounded-xl p-4 w-1/3 mx-auto mt-10">
            <h2 className="text-2xl font-bold">User Name: {name}</h2>
            <p>User Email: {email}</p>
            <button className="btn btn-success mt-3" onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;