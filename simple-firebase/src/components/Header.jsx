import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="container mx-auto text-center flex gap-5 justify-center">
            <NavLink to="/" className="text-xl font-bold font-mono mt-5 ">Home</NavLink>
            <NavLink to="/login" className="text-xl font-bold font-mono mt-5 ">Login</NavLink>
        </div>
    );
};

export default Header;