import React ,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'
import UserContextProvider from '../context/UserContextProvider'

function Login() {

    

    const {setUser, username, password, setUsername, setPassword} = useContext(UserContext)

     const  buttonHandler = (e) => {
        e.preventDefault()  
        setUser({setUsername, setPassword})
    }

  return (
        <div>
            <h1>Login</h1>
            <input type="text "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username' />
            <input type="passowrd " 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='*******' />
            <button onClick={buttonHandler}>Submit</button>
        </div>
  )
}

export default Login