import React from 'react'
import { useAuth } from '../Context/LoginStatusContext'

function WelcomeMessage() {
    const {isLogin} = useAuth()
  return (
    <div>
        {
            isLogin ? (<h1>Welcome Back User!</h1>) : (<h1>Please login Again...</h1>)
        }
    </div>
  )
}

export default WelcomeMessage