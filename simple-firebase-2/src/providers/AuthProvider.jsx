import { createContext } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const authInfo = {
        name: 'hello',
        age: 11
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;