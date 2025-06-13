import { Route, Routes } from 'react-router'
import { Footer } from './components/Footer'
import { ToggleTheme } from './components/ToggleTheme'
import { Home } from './pages/Home'
import { MovieDetail } from './pages/MovieDetail'

function App () {
  return (
    <>
      <div className='fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
      <ToggleTheme />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
