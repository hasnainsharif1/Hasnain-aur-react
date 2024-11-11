import React from 'react'
import { useAuth } from '../Context/LoginStatusContext'

function AuthBtn() {

    const {isLogin, login, logOut} = useAuth()
  return (
    <div>
        <h1>Hasnain</h1>
        <button onClick={isLogin ? logOut : login}>
            Check Status
        </button>
    </div>
  )
}

export default AuthBtn