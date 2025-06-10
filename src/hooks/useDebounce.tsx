import { useEffect, useState } from 'react'

// Le pasamos el tipo por parámetro... T es un tipo genérico...
export function useDebounce<T> (value: T, delay: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // cuando se actualiza el value, se ejecuta el setTimeout
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
