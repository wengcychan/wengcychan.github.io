import { useState } from 'react'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {

  if (!projects.length) return null

  const [showProjects, setShowProjects] = useState('All')

  const projectCategories = ['All', ...new Set(projects.map((project) => project.category))]

  const projectsToShow = showProjects == 'All' 
    ? projects 
    : projects.filter(project => project.category == showProjects)


  const handleShowProject = (projectCategory) => {
    setShowProjects(projectCategory)
  }

  const projectGridRows = Math.ceil(projectsToShow.length / 3)

  const projectGridStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '33% 33% 33%',
    gridTemplateRows: `repeat(${projectGridRows}, 400px)`,
    gridGap: '2em'
  }

  return (
    <section id='projects' className='section projects'>
      <h1 className='section__title'>Projects</h1>

      <ul className='project__list'>

        {projectCategories.map((projectCategory) => (
          <li 
            key={ uniqid() } 
            onClick={ () => handleShowProject(projectCategory) }
            className='project__list__item'
            aria-selected={ showProjects === projectCategory 
              ? 'true' 
              : 'false' }
          >
            <button className={ showProjects === projectCategory 
              ? 'link project__category__link project__category__link--selected' 
              : 'link project__category__link' }>
              { projectCategory }
            </button> 
          </li>
        ))}
      </ul>

      <div style={ projectGridStyle }>
        {projectsToShow.map((project) => (
          <ProjectContainer key={ uniqid() } project={ project } />
        ))}
      </div>
    </section>
  )
}

export default Projects
