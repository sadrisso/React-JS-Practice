import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.init";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


const SignUp = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const emailRef = useRef();

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        setErrorMessage("");
        setSuccess(false);

        if (!terms) {
            setErrorMessage("Please accept our terms and conditions")
            return;
        }

        if (password.langth < 6) {
            setErrorMessage("Password must be 6 character or longer!");
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage("at least one uppercase one lower case one special char one digit");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user)
                setSuccess(true)

                sendEmailVerification(auth.currentUser)
                    .then(() => { console.log("varification email sent") })
            })
            .catch(err => {
                console.log(err.message)
                setErrorMessage(err.message)
                setSuccess(flase)
            })
    }

    const handleForgetPass = () => {
        console.log("get me a email password", emailRef.current.value)
        const email = emailRef.current.value;

        if(!email) {
            console.log("Please provide a valide email")
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {console.log("password reset email sent please check your email")
                    alert("password reset email sent please check your email")
                })
        }
    }

    return (

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-28">
            <h2 className="text-4xl font-bold mb-5">Sign Up Now</h2>
            <form className="card-body" onSubmit={handleSignUp}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        ref={emailRef}
                        type="email"
                        placeholder="email"
                        name="email"
                        className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <button className="absolute right-4 top-12" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="password"
                        name="password"
                        className="input input-bordered" required />

                    {/* terms and condition */}
                    <div className="form-control">
                        <label className="cursor-pointer label justify-start gap-2">
                            <input type="checkbox" name="terms" className="checkbox checkbox-primary" />
                            <span className="label-text">Accept our terms and condition</span>
                        </label>
                    </div>

                    {/* forget pass */}
                    <label onClick={handleForgetPass} className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                {success && <p className="text-green-500">Sign Up Successfully</p>}
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>

    );
};

export default SignUp;