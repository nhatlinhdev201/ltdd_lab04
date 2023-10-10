import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [dataLogin, setDataLogin] = useState({
        username : '',
        password : ''
    })

    return (
        <AuthContext.Provider value={[dataLogin, setDataLogin]}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}