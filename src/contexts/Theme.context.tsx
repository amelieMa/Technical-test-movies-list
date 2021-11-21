import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
})

export const ThemeProvider = ({ children, localStorage }: any) => {
  const [theme, setTheme] = useState(localStorage)
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  const toggleTheme = () => {
    setTheme(nextTheme)
    window.localStorage.setItem('theme', nextTheme)
  }

  useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>{children}</ThemeContext.Provider>
}
