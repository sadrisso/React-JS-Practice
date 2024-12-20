import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";


const Login = () => {

    const {signInUser} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        signInUser(email, password)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className="flex flex-col gap-4 justify-center items-center mt-5 bg-base-200 container mx-auto py-20">
            <div>
                <h1 className="text-4xl font-serif font-bold">Login</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
            </div>
        </div>
    )
}

export default Login;