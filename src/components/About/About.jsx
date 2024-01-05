import { v4 as uuidv4 } from 'uuid';
import { about } from '../../portfolio'
import './About.css'
import Typewriter from 'typewriter-effect';

const About = () => {
  const { descriptions, typewriters, img } = about

  return (
    <section id='about' className='section about'>
      <div className='about'>
        <h1 className='section__title'>About Me</h1>
    
        <div className='center about__container'>
          <div className='about__desc__container'>
            <ul >
              {descriptions.map(description => 
                <li className='about__desc' key={ uuidv4() }>
                  { description }
                </li>
              )}
            </ul>

            <div className='typewriter'>
              <span className='prompt'>$&gt;</span>
              <Typewriter
                options={{
                  strings: [typewriters[0], typewriters[1]],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                }}
              />
            </div>
          </div>

          <div className='about__img__container'>
            <div className='spotlight__container'>
              <img src={ img.src } alt={ img.alt } width="100%"/>
              <div className="spotlight"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
