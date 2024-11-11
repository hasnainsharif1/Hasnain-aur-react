
import './App.css'
import AuthBtn from './Components/AuthBtn'
import WelcomeMessage from './Components/WelcomeMessage'
import { AuthProvider } from './Context/LoginStatusContext'

function App() {

  return (
    <AuthProvider>
      <div className='bg-slate-600'>
      <h1 className='text-3xl'>Welcome to know login Status</h1>
      <AuthBtn />
      <WelcomeMessage />
      </div>
    </AuthProvider>
  )
}

export default App
