import './Footer.css'
import { home } from '../../portfolio'

const Footer = () => {

  const { social, icons } = home
  const GithubIcon = icons.github
  const EmailIcon = icons.email
  
  return (
    <footer className='footer'>
      <a
        href={social.github}
        aria-label='github'
        className='link link--icon'
      >
        <GithubIcon className='icon'/>
      </a>
      <a
        href={social.email}
        aria-label='email'
        className='link link--icon'
      >
        <EmailIcon className='icon'/>
      </a>
    </footer>
  )
}

export default Footer
