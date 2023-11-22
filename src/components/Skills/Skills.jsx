import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <div>
        {Object.entries(skills).map(([category, items]) => (
          <div key={uniqid()}>
            <h3 className='skills__category'>{category}</h3>
            <div className="left">
              {Object.entries(items).map(([skill, Icon]) => (
                  <div className='skills__list-item' key={uniqid()}>
                    <Icon className='icon' />
                    <h6>{skill}</h6>
                  </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
