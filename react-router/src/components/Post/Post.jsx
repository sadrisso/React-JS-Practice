import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Post = ({post}) => {

    const {name, id, email, body} = post;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/posts/${id}`)
    }

    return (
        <div>
            <div className="border border-green-900 p-5 m-5">
                <h1>{id}</h1>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{body}</p>
                {/* <Link to={`/posts/${id}`}><button className="btn">See details</button></Link> */}
                <button onClick={handleClick}>See Details</button>
            </div>
        </div>
    );
};

export default Post;