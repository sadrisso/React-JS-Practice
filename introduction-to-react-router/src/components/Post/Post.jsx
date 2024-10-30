// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


const Post = ({post}) => {

    const {id, title, body} = post

    const navigate = useNavigate();

    const handleShow = () => {
        navigate(`/posts/${id}`);
    }

    return (
        <div className="border border-yellow-400 rounded-xl p-5 m-5">
            <h2>{title}</h2>
            <p>{id}</p>
            <p>{body}</p>
            {/* <Link to={`/posts/${id}`}>See specific post</Link> */}
            <button onClick={handleShow} className="btn">See Detail</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object,
}

export default Post;