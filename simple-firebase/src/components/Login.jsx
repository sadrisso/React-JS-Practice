import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase/firebase.init";


const Login = () => {

    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then(result => console.log(result))
        .catch(err => console.log("Err: ", err))
    }

    return (
        <div>
            <button onClick={handleGoogleLogin}>Login With Google</button>
        </div>
    );
};

export default Login;