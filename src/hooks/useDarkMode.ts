import { useEffect, useState } from 'react'

export function useDarkMode () {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return {toggleTheme, theme}
}
