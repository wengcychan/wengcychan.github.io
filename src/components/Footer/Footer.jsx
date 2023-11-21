import './Footer.css'
// import GitHubIcon from '@material-ui/icons/GitHub'
// import EmailIcon from '@material-ui/icons/Email'
import { home } from '../../portfolio'

const Footer = () => {

  const { social } = home
  
  return (
    <footer className='footer'>
      <a
        href={social.github}
        aria-label='github'
        className='link link--icon'
      >
        {/* <GitHubIcon className='icon'/> */}
      </a>
      <a
        href={social.email}
        aria-label='email'
        className='link link--icon'
      >
        {/* <EmailIcon className='icon'/> */}
      </a>
    </footer>
  )
}

export default Footer
