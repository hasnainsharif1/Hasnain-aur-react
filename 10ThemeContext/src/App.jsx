import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/themeContext'
import ThemeBtn from './Components/Themebtn'
import ThemeCard from './Components/ThemeCard'


function App() {

  const [themeMode, setThemeMode] = useState('light')

  useEffect(() => {
    const ThemeValue = document.querySelector('html')
    ThemeValue.classList.remove("dark","light")
    ThemeValue.classList.add(themeMode)
  }, [themeMode])
  

  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>   
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <ThemeCard />
              </div>
          </div>
      </div>

    </ThemeProvider>
  )
}

export default App
