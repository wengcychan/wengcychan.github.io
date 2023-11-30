import { home } from '../../portfolio'
import './Home.css'

const Home = () => {
  const { name, role, social, img, icons } = home
  const { EmailIcon, GithubIcon } = icons

  return (
    <div className='home center'>
      <div className='home__content'>
        <h1 className='home__name'>
          Hi, I am {name}
        </h1>

        <h2 className='home__role'>
          {role}
        </h2>

        <div className='home__contact'>
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
        </div>

        <a href='#about'>
          <span type='button' className='home__about btn btn--outline'>
            More about me
          </span>
        </a>  
      </div>
    </div>
  )
}

export default Home
