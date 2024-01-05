import { v4 as uuidv4 } from 'uuid';
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {

  const { stacks, img } = skills

  return (
    <section id='skills' className='section'>
      <h1 className='section__title'>Skills</h1>

      <img src={ img.src } alt={ img.alt } className='skills__img'/>

      <div>
        {stacks.map(({ category, stack }) => (
          <div key={ uuidv4() } className='skills__list'>
            <h2 className='skills__category'>
              { category }
            </h2>
            <div className='center'>
              {stack.map(({ description, Icon }) => (
                <div key={ uuidv4() }>
                  <div className='skills__icon__container'>
                    <Icon className='skills__icon' />
                    <p className='skills__description'>
                      { description }
                    </p>
                  </div>
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
