import { useState } from 'react'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {

  const [showProjects, setShowProjects] = useState('All')

  const projectCategories = ['All', ...new Set(projects.map(project => project.category))]

  const projectsToShow = showProjects === 'All' 
    ? projects
    : projects.filter(project => project.category === showProjects)

  const handleShowProject = projectCategory => setShowProjects(projectCategory)

  return (
    <section id='projects' className='section projects'>
      <h1 className='section__title'>Projects</h1>

      <ul className='project__category'>
        {projectCategories.map(projectCategory => (
          <li 
            key={ uniqid() } 
            onClick={ () => handleShowProject(projectCategory) }
            className='project__category__item'
            aria-selected={ showProjects === projectCategory 
              ? 'true' 
              : 'false' }
          >
            <button className={`link project__category__link ${
                 showProjects === projectCategory ? 'project__category__link--selected' : ''
              }`}
            >
              { projectCategory }
            </button> 
          </li>
        ))}
      </ul>

      <div className='project__grid'>
        {projectsToShow.map(project =>
          <ProjectContainer key={ uniqid() } project={ project } />
        )}
      </div>
    </section>
  )
}

export default Projects
