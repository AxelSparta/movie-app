import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export function ToggleTheme () {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    // leer preferencia del tema del usuario del sistema, objeto MediaQueryList que contiene la propiedad matches, si es true es dark, si es false es light
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
    const themePreference = systemTheme.matches ? 'dark' : 'light' 
    document.documentElement.className = themePreference

    setTheme(themePreference)
  }, [])

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  const handleToggleTheme = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <button
      className='border rounded-xl p-2 cursor-pointer'
      onClick={handleToggleTheme}
    >
      Toggle Theme: {theme}
    </button>
  )
}
