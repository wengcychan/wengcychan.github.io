import uniqid from 'uniqid'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { descriptions, img } = about

  return (
    <section id='about' className='section'>
      <h1 className='section__title'>About Me</h1>
      <div className='center'>
        <div className='about__desc__container'>
          {descriptions.map((description) => (
            <p className='about__desc' key={uniqid()} >{description}</p>
          ))}
        </div>
        <div className='about__img__container'>
          <img src={ img } alt="about-me" width="80%"/>
        </div>
      </div>
    </section>
  )
}

export default About
