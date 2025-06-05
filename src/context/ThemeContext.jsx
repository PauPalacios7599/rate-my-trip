import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode')
    return savedTheme === 'true'
  })

  const toggleTheme = () => setDarkMode((prev) => !prev)

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    )
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  console.log('useTheme loaded')
  return useContext(ThemeContext)
}
