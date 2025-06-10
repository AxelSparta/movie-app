import { useEffect, useState } from 'react'
import { MoonIcon } from '../icons/Moon'
import { SunIcon } from '../icons/Sun'

type Theme = 'light' | 'dark'

export function ToggleTheme () {
  const [theme, setTheme] = useState<Theme>(() => {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as Theme
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      return systemTheme.matches ? 'dark' : 'light'
    }
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
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
      className='p-2 cursor-pointer hover:scale-110 transition-transform block mx-auto mt-2'
      onClick={handleToggleTheme}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
