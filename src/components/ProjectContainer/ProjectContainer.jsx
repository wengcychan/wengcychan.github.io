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

      <img src={ img.src } alt={ img.alt } className='project__img'/>
    
      { sourceCode && (
        <a href={ sourceCode }>
          <span type='button' className='project__link project__btn btn--outline'>
            <GithubIcon className='link--icon' /> Source Code
          </span> 
        </a>
      )}

      { liveDemo && (
        <a href={ liveDemo }>
          <span type='button' className='project__link project__btn btn--outline'>
            <DemoIcon className='link--icon' /> Live Demo
          </span>
        </a>
      )}

    </div>
  )
}

export default ProjectContainer
