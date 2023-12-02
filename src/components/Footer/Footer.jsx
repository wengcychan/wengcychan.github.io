import './Footer.css'
import { home } from '../../portfolio'

const Footer = () => {

  const { social, icons } = home
  const { EmailIcon, GithubIcon } = icons
  
  return (
    <footer className='footer'>
      <a
        href={social.github}
        aria-label='github'
        className='link'
      >
        <GithubIcon className='link--icon'/>
      </a>
      <a
        href={social.email}
        aria-label='email'
        className='link'
      >
        <EmailIcon className='link--icon'/>
      </a>
    </footer>
  )
}

export default Footer
