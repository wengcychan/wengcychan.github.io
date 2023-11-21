// import GitHubIcon from '@material-ui/icons/GitHub'
// import EmailIcon from '@material-ui/icons/Email'
import { home } from '../../portfolio'
import './Home.css'

const Home = () => {
  const { name, role, social, img } = home

  return (
    <div className='home center'>
      <div className='home__content left'>
        <h1>
          Hi, I am {name}
        </h1>

        <h2 className='home__role'>{role}</h2>

        <div className='home__contact center'>

          <div>
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
          </div>
        </div>

        <a href='#about'>
          <span type='button' className='home__about btn btn--outline'>
            More about me
          </span>
        </a>  
      </div>
      <div className='home__background'>
        <img src={ img } alt="background" width="50%"/>
      </div>
    </div>
  )
}

export default Home
