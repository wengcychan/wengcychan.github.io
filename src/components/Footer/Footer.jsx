import './Footer.css'
import { home } from '../../portfolio'

const Footer = () => {

  const { social, icons } = home
  const { github, email } = social
  const { EmailIcon, GithubIcon } = icons
  
  return (
    <footer className='footer'>
      <a href={ github } aria-label='github' target='_blank'>
        <GithubIcon className='link--icon'/>
      </a>
      <a href={ email } aria-label='email'>
        <EmailIcon className='link--icon'/>
      </a>
    </footer>
  )
}

export default Footer
