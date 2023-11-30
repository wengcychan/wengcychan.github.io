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
      <h1 className='section__title'>Projects</h1>

      <ul className='project__list'>

        <li className='project__list-item'>
          <button onClick={() => setShowProjects('all')} className='link link--project'>
            All
          </button>
        </li>

        <li className='project__list-item'>
          <button onClick={() => setShowProjects('web')} className='link link--project'>
            Web
          </button>
        </li>

        <li className='project__list-item'>
          <button onClick={() => setShowProjects('gaming')} className='link link--project'>
            Gaming
          </button>
        </li>

        <li className='project__list-item'>
          <button onClick={() => setShowProjects('graphics')} className='link link--project'>
            Graphics
          </button>
        </li>

        <li className='project__list-item'>
          <button onClick={() => setShowProjects('others')} className='link link--project'>
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
