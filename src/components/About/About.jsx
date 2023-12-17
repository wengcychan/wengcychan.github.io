import uniqid from 'uniqid'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { descriptions, img } = about

  return (
    <section id='about' className='section about'>
      <div className='about'>
        <h1 className='section__title'>About Me</h1>
    
        <div className='center about__container'>
          <ul className='about__desc__container'>
            {descriptions.map(description => 
              <li className='about__desc' key={ uniqid() }>
                { description }
              </li>
            )}
          </ul>

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
