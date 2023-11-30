import uniqid from 'uniqid'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { descriptions, img } = about

  return (
    <section id='about' className='section about'>
      <h1 className='section__title'>About Me</h1>
      <div className='center'>
        <div>
          {descriptions.map((description) => (
            <p className='about__desc' key={uniqid()} >{description}</p>
          ))}
        </div>
        <div>
          <img src={ img } alt="about-me" width="50%"/>
        </div>
      </div>
    </section>
  )
}

export default About
