import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(1)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("User exists")
                setUser(currentUser)
            }
            else {
                console.log("User not exists")
                setUser(null)
            }
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const contextInfo = {
        signUpUser,
        signInUser,
        signOutUser,
        user,
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