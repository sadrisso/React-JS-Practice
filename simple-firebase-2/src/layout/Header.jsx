import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Header = () => {

    const { user, signOutUser } = useContext(AuthContext)
    console.log(user)

    const handleSignOutUser = () => {
        signOutUser()
        .then(() => {console.log("User signed out")})
        .catch((err) => console.log(err.message))
    }

    return (
        <div className="flex text-2xl gap-10 justify-evenly mt-5 items-center">
            <div className="flex gap-10">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </div>
            <div>
                {user ? <div className="flex gap-2 items-center">
                    <p>{user.email}</p>
                    <button onClick={handleSignOutUser} className="btn btn-error">Sign Out</button>
                </div>
                    :
                    <Link to="/login"><button className="btn btn-success">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;