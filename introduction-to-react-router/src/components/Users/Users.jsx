import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () =>
{

    const users = useLoaderData()

    return (
        <div>
            <h1>Users: {users.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {users.map((user, i) => <User key={i} user={user}></User>)}
            </div>
        </div>
    );
};

export default Users;