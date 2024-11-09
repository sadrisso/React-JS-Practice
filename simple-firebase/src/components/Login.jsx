import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((res) => setUser(res))
            .catch((err) => console.log("ERR: ", err))
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(res => setUser(res))
            .catch(err => console.log(err))
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => setUser(null))
            .catch(err => console.log(err))

    }

    return (
        <div>
            {user ?
                <div className="mx-auto">
                    <button onClick={handleSignOut} className="btn btn-info">Sign Out</button>
                </div>
                :
                <>
                    <div className="mockup-phone">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo phone-1">
                                <button onClick={handleGoogleLogin} className="btn btn-success mb-5">Login With Google</button>
                                <button onClick={handleGithubLogin} className="btn btn-accent">Login With Github</button>
                            </div>
                        </div>
                    </div>
                </>
            }

            {user &&
                <div className="flex flex-col gap-3 justify-center items-center h-[100vh] container mx-auto">
                    <h1 className="text-3xl">{user.user.displayName}</h1>
                    <p>{user.user.email}</p>
                    <img src={user.user.photoURL} alt="" />
                </div>
            }

        </div>
    );
};

export default Login;