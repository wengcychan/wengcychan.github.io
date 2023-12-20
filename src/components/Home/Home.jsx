import { home } from '../../portfolio'
import './Home.css'

const Home = () => {
  const { name, role, social, icons } = home
  const { github, email } = social
  const { EmailIcon, GithubIcon } = icons

  return (
    <div className='home center'>
      <div>
        <h1 className='home__name'>
          Hi, I am {name}
        </h1>

        <h2 className='home__role'>
          {role}
        </h2>

        <div className='home__contact'>
            <a href={ github } aria-label='github' target='_blank'>
              <GithubIcon className='link--icon'/>
            </a>
            <a href={ email } aria-label='email'>
              <EmailIcon className='link--icon'/>
            </a>
        </div>

        <a href='#about'>
          <span type='button' className='btn home__btn'>
            More about me
          </span>
        </a>  
      </div>
    </div>
  )
}

export default Home
