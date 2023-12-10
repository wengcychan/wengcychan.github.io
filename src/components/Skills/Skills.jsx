import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {

  const { stacks, img } = skills

  return (
    <section id='skills' className='section skills'>
      <h1 className='section__title'>Skills</h1>
      <img src={ img.src } alt={ img.alt } className='skills__img'/>
      <div>
        {stacks.map(({ category, stack }) => (
          <div key={ uniqid() } className='skills__list'>
            <h4 className='skills__category'>{ category }</h4>
            <div className='center'>
              {stack.map(({ description, Icon }) => (
                <div key={ uniqid() }>
                  <div className='skills__icon'>
                    <Icon style={{ fontSize: '40px' }}/>
                    <h6>{ description }</h6>
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
