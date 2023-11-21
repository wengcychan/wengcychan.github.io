import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { home } from '../../portfolio'
import './Home.css'

const Home = () => {
  const { name, role, description, resume, social } = home

  return (
    <div className='home center'>
      {name && (
        <h1>
          Hi, I am <span className='home__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='home__role'>A {role}.</h2>}
      <p className='home__desc'>{description && description}</p>

      <div className='home__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Home
