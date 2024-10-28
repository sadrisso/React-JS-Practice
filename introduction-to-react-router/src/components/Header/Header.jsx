import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="mt-10 bg-red-300 p-8">
            <nav className="text-3xl">
                <Link to="/" className="mr-6 cursor-pointer bg-gray-400 p-2 rounded-xl">Home</Link>
                <Link to="/about" className="mr-6 cursor-pointer bg-gray-400 p-2 rounded-xl">About</Link>
                <Link to="/contact" className="mr-6 cursor-pointer bg-gray-400 p-2 rounded-xl">Contact</Link>
                <Link to="/users" className="mr-6 cursor-pointer bg-gray-400 p-2 rounded-xl">Users</Link>
            </nav>
        </div>
    );
};

export default Header;