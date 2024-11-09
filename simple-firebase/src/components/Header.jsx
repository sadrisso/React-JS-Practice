import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <NavLink to="/" className="btn btn-primary">Home</NavLink>
            <NavLink to="/login" className="btn btn-primary">Login</NavLink>
        </div>
    );
};

export default Header;