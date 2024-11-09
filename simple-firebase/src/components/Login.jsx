import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);

    const handleGoogleLogin = () => {
       signInWithPopup(auth, provider)
       .then((res) => setUser(res))
       .catch((err) => console.log("ERR: ", err))
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => setUser(null))
        .catch(err => console.log(err))

    }

    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn btn-success">Login With Google</button>
            <button onClick={handleSignOut} className="btn btn-info">Sign Out</button>
            {user &&
            <div>
                <h1>{user.user.displayName}</h1>
                <p>{user.user.email}</p>
                <img src={user.user.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default Login;