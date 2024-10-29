import { Link } from "react-router-dom";

const User = ({user}) => {

    const {id, name, email} = user;

    return (
        <div className="border border-red-500 m-5 p-5 rounded-xl">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{id}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;