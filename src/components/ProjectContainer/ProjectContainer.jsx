import uniqid from 'uniqid'
import { FaGithub as GithubIcon } from 'react-icons/fa';
import { FiExternalLink as DemoIcon } from "react-icons/fi";
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {

  const { name, description, stack, img, sourceCode, liveDemo } = project

  return (
    <div className='project'>
      <h4>{ name }</h4>

      <p className='project__description'>
        { description }
      </p>
    
      <ul className='project__stack'>
        {stack.map(item =>
          <li key={ uniqid() } className='project__stack-item'>
            { item }
          </li>
        )}
      </ul>

      <div className='project__img__container'>
        <img src={ img.src } alt={ img.alt } className='project__img'/>
      </div>

      <div className='project__btn__container'>
        {sourceCode && (
          <a href={ sourceCode } target='_blank'>
            <div type='button' className='btn__section project__btn'>
              <GithubIcon className='btn__section__icon' />
              Source Code
            </div> 
          </a>
        )}

        {liveDemo && (
          <a href={ liveDemo } target='_blank'>
            <div type='button' className='btn__section project__btn'>
              <DemoIcon className='btn__section__icon' />
              Live Demo
            </div>
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectContainer
