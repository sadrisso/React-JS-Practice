import { useLoaderData } from "react-router-dom";


const UserDetails = () =>
{
    const user = useLoaderData();

    const {name, email} = user;

    return (
        <div>
            <h2>User Name: {name}</h2>
            <p>User Email: {email}</p>
        </div>
    );
};

export default UserDetails;