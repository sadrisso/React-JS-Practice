import { createContext } from "react";

export const AuthContext = createContext(1)

const AuthProvider = ({children}) => {
    const name = 'Drisso 001'

    const contextInfo = {
        name,
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