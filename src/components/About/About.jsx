import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { description_p1, description_p2, img } = about

  return (
    
      <section id='about' className='section about'>
        <h2 className='section__title'>About Me</h2>
        <div className='center'>
          <div>
            <p className='about__desc'>{ description_p1 }</p>
            <p className='about__desc'>{ description_p2 }</p>
          </div>
          <div>
            <img src={ img } alt="about-me" width="50%"/>
          </div>
        </div>
      </section>  

  )
}

export default About
