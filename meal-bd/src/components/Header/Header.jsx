import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="text-center">
            <nav className="mt-10">
                <Link to="/" className="text-xl text-white mr-5 bg-blue-700 py-2 px-3 rounded-xl">Home</Link>
                <Link to="/about" className="text-xl text-white mr-5 bg-blue-700 py-2 px-3 rounded-xl">About</Link>
                <Link to="/contact" className="text-xl text-white mr-5 bg-blue-700 py-2 px-3 rounded-xl">Contact</Link>
                <Link to="/meals" className="text-xl text-white mr-5 bg-blue-700 py-2 px-3 rounded-xl">Meals</Link>
            </nav>
        </div>
    );
};

export default Header;