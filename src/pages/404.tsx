import { NavLink } from 'react-router'

export function NotFoundPage () {
  return (
    <main className='flex-1 container mx-auto py-12 text-center flex flex-col gap-2'>
      <h1 className='text-4xl font-bold'>Página no encontrada</h1>
      <p className='text-lg'>Lo siento, la página que buscas no existe.</p>
      <NavLink to='/' className='cursor-pointer hover:underline hover:scale-110 transition-transform text-blue-400 w-fit mx-auto'>Volver al inicio</NavLink>
    </main>
  )
}
