import { useEffect, useState } from 'react'

type Themes = 'light' | 'dark'

export function useDarkMode () {
  const initialState: Themes = window.localStorage.getItem('theme') as Themes ?? 'light'
  const [ theme, setTheme ] = useState<Themes>(initialState)

  const toggleTheme = () => {
    const changeTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(changeTheme)
    window.localStorage.setItem('theme', changeTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [ theme ])

  return { toggleTheme, theme }
}
