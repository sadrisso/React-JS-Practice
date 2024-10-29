import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="text-center py-4">
            <Link to="/" className="mr-5  p-4">Home</Link>
            <Link to="/about" className="mr-5  p-4">About</Link>
            <Link to="/contact" className="mr-5  p-4">Contact</Link>
            <Link to="/posts" className="mr-5  p-4">Posts</Link>
        </div>
    );
};

export default Header;