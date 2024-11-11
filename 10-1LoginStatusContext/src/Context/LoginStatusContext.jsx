import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const login = () => setIsLogin(true)
    const logOut = () => setIsLogin(false)
    const [isLogin, setIsLogin] = useState(false)

    return (
        <AuthContext.Provider value={{login, logOut, isLogin, setIsLogin}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = useContext(AuthContext)