import { useState } from 'react'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {

  if (!projects.length) return null

  const [showProjects, setShowProjects] = useState('all')

  const projectsToShow = showProjects == 'all' 
    ? projects 
    : projects.filter(project => project.category == showProjects)

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <ul className='project__list'>

        <li className='project__list-item'>
          <button onClick={() => setShowProjects('all')} className='link link--nav'>
            All
          </button>
        </li>

        <li className='project__list-item'>
          <button onClick={() => setShowProjects('web')} className='link link--nav'>
            Web
          </button>
        </li>

        <li className='project__list-item'>
          <button onClick={() => setShowProjects('gaming')} className='link link--nav'>
            Gaming
          </button>
        </li>

        <li className='project__list-item'>
          <button onClick={() => setShowProjects('graphics')} className='link link--nav'>
            Graphics
          </button>
        </li>

        <li className='project__list-item'>
          <button onClick={() => setShowProjects('others')} className='link link--nav'>
            Others
          </button>
        </li>

      </ul>

      <div className='projects__grid'>
        {projectsToShow.map((project) => (
          <ProjectContainer key={ uniqid() } project={ project } />
        ))}
      </div>
    </section>
  )
}

export default Projects
