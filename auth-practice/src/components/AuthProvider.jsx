import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(1)

const AuthProvider = ({children}) => {

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    const contextInfo = {
        signUpUser,
        signInUser,
        signOutUser,
    }

    return (
        <div>
            <AuthContext.Provider value={contextInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;