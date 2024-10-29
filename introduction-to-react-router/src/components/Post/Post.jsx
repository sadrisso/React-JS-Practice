import { Link } from "react-router-dom";


const Post = ({post}) => {

    const {id, title, body} = post

    return (
        <div className="border border-yellow-400 rounded-xl p-5 m-5">
            <h2>{title}</h2>
            <p>{id}</p>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>See specific post</Link>
        </div>
    );
};

export default Post;