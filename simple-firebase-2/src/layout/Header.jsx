import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Header = () => {

    const data = useContext(AuthContext)
    console.log(data)

    return (
        <div className="flex text-2xl gap-10 justify-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
        </div>
    );
};

export default Header;