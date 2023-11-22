import uniqid from 'uniqid'
import { FaGithub as GithubIcon } from 'react-icons/fa';
import { FiExternalLink as DemoIcon } from "react-icons/fi";
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {

  const { name, category, description, stack, img, sourceCode, liveDemo } = project
  
  return (
    <div className='project'>

      <h4>{ name }</h4>

      <p className='project__description'>{ description }</p>
    
      <ul className='project__stack'>
        { stack.map((item) => (
          <li key={ uniqid() } className='project__stack-item btn--outline'>
            { item }
          </li>
        ))}
      </ul>

      <img src={ img } alt='project image' className='project__img'/>
    
      { sourceCode && (
        <a
          href={ sourceCode }
          aria-label='source code'
          className='link link--icon'
        >
          <GithubIcon />
        </a>
      )}

      { liveDemo && (
        <a
          href={ liveDemo }
          aria-label='live preview'
          className='link link--icon'
        >
          <DemoIcon />
        </a>
      )}

    </div>
  )
}

export default ProjectContainer
