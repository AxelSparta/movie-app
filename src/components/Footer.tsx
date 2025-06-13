import { GithubIcon } from '../icons/Github'
import { LinkedinIcon } from '../icons/Linkedin'
import { SuitcaseIcon } from '../icons/Suitcase'

export function Footer () {
  return (
    <footer className='container mx-auto px-2 mb-4 text-slate-900 dark:text-slate-100'>
      <div className='flex flex-col items-center justify-center gap-2 border rounded-lg py-4 sm:flex-row sm:justify-between sm:px-4'>
        <p>Hecho con ❤️ y con React.</p>
        <div className='flex justify-center gap-2'>
          <a
            href='https://github.com/AxelSparta'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:scale-110 transition-transform'
          >
            <GithubIcon className='size-8' />
          </a>
          <a
            href='https://www.linkedin.com/in/axel-sparta-web/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:scale-110 transition-transform'
          >
            <LinkedinIcon className='size-8' />
          </a>
          <a
            href='https://axelsparta.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:scale-110 transition-transform'
          >
            <SuitcaseIcon  className='size-8'/>
          </a>
        </div>
      </div>
    </footer>
  )
}
