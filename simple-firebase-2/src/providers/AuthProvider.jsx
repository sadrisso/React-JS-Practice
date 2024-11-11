import { createContext, useEffect, useState } from "react";
import { auth } from '../firebase-init';
import { createUserWithEmailAndPassword, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("currently logged in ", currentUser)
                setUser(currentUser)
                setLoading(false)
            }
            else {
                console.log("logged out")
                setUser(null)
            }
        });

        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = {
        createUser,
        signInUser,
        signInWithGithub,
        signInWithGoogle,
        signOutUser,
        user,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;