import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";
import { useState } from "react";


const SignUp = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value

        setErrorMessage("");
        setSuccess(false);

        if (password.langth < 6) {
            setErrorMessage("Password must be 6 character or longer!");
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)){
            setErrorMessage("at least one uppercase one lower case one special char one digit");
            return;
        }


        createUserWithEmailAndPassword(auth, email, password)
        .then(res => {console.log(res.user)
            setSuccess(true)
        })
        .catch(err => {console.log(err.message)
            setErrorMessage(err.message)
            setSuccess(flase)
        })
    }

    return (

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-28">
            <h2 className="text-4xl font-bold mb-5">Sign Up Now</h2>
            <form className="card-body" onSubmit={handleSignUp}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                {success && <p className="text-green-500">Sign Up Successfully</p>}
            </form>
        </div>

    );
};

export default SignUp;