// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const User = ({user}) => {

    const {id, name, email} = user;
    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/user/${id}`);
    }

    return (
        <div className="border border-red-500 m-5 p-5 rounded-xl">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{id}</p>
            {/* <Link to={`/user/${id}`}>Show Details</Link> */}
            <button onClick={handleShowDetail} className="btn">Show Detail</button>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object,
}

export default User;