import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} =useContext(UserContext);
    
        if (!user) return <div>No User Founded!</div>
        return <div>UserName  {user.username}</div>
    
}

export default Profile 