import React from "react";
import UserContext from "./UserContext";

const UserContextProvider =({children}) => {
    const [user, setUser] = React.useState(null);
    const [username, setUsername] =React.useState('')
    const [password, setPassword] =React.useState('')
    const login = () => setUser({ username, password });

    return (
        <UserContext.Provider value={{user, setUser: login, username, setUsername, password, setPassword }}>
            {children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;