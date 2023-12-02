import uniqid from 'uniqid'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  
  const { descriptions, social, icons } = contact
  const { EmailIcon, PhoneIcon } = icons

  return (
    <section id='contact' className='section'>
      <h1 className='section__title'>Get In Touch</h1>
      <div className='center'>
        <div className='contact__desc__container'>
          {descriptions.map((description) => (
            <p className='contact__desc' key={uniqid()} >{description}</p>
          ))}
        </div>
        <div className='left contact__social'>
          <div className='contact__social__item'>
            <EmailIcon className='contact__icon' />
            { social.email }
          </div>
          <div className='contact__social__item'>
            <PhoneIcon className='contact__icon' />
            { social.phone }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
