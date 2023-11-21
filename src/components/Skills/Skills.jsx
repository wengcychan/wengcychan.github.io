import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

// make new component

const Skills = () => {

  const { LanguagesIcons, languages, web, gaming, versionControl, design } = skills

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      {LanguagesIcons.map((Icon, index) => (
          <div key={index} className='icon'>
            {Icon && <Icon size={50} />} {/* Render each icon */}
          </div>
        ))}
      <div>
        <h3>Languages</h3>
        {languages.map((skill) => (
          <p key={uniqid()} >{skill}</p>
        ))}
      </div>
      <div>
        <h3>Web Development</h3>
        {web.map((skill) => (
          <p key={uniqid()} >{skill}</p>
        ))}
      </div>
      <div>
        <h3>Gaming</h3>
        {gaming.map((skill) => (
          <p key={uniqid()} >{skill}</p>
        ))}
      </div>
      <div>
        <h3>Version Control</h3>
        {versionControl.map((skill) => (
          <p key={uniqid()} >{skill}</p>
        ))}
      </div>
      <div>
        <h3>Design</h3>
        {design.map((skill) => (
          <p key={uniqid()} >{skill}</p>
        ))}
      </div>
      {/* <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul> */}
    </section>
  
  )
}

export default Skills
