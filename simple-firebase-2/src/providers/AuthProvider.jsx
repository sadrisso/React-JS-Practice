import { createContext, useState } from "react";
import { auth } from '../firebase-init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            console.log("Currently logged in", currentUser)
            setUser(currentUser)
        }
        else {
            console.log("logged out")
            setUser(null)
        }
    })

    const name = "Aladin"

    const authInfo = {
        name,
        createUser,
        signInUser,
        user,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;