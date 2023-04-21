function useDarkMode () {
  const setTheme = () => document.documentElement.setAttribute('data-theme', 'dark')
  const theme = document.documentElement.getAttribute('data-theme')
  const removeDarkTheme = () => document.documentElement.removeAttribute('data-theme')

  return {setTheme, theme, removeDarkTheme}
}

export function toggleDarkMode() {
  const {theme, setTheme, removeDarkTheme} = useDarkMode()

  if (theme === null) return setTheme()
  else return removeDarkTheme()
}

