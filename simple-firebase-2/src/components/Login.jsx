import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Login = () => {

    const navigate = useNavigate();
    const { signInUser, signInWithGithub, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        // user sign in
        signInUser(email, password)
            .then((res) => {
                console.log(res)
                e.target.reset();
                navigate('/')
            })
            .catch((err) => console.log("Error: ", err))
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err.message))
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log("ERR: ", err.message))
    }

    return (

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-20">
            <h1 className="text-3xl p-2 text-center">Login</h1>
            <form className="card-body" onSubmit={handleLogin}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                        required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center mb-5">New to this website? <Link to="/register">Register</Link></p>
            <div className="text-center m-4">
                <button onClick={handleGithubSignIn} className="btn btn-ghost">Sign In With Github</button>
                <button onClick={handleGoogleSignIn} className="btn btn-ghost">Sign In With Google</button>
            </div>
        </div>

    );
};

export default Login;