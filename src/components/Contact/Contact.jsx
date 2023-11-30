import uniqid from 'uniqid'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  
  const { descriptions, social, icons } = contact
  const { EmailIcon, PhoneIcon } = icons

  return (
    <section id='contact' className='section contact'>
      <h1 className='section__title'>Get In Touch</h1>
      <div className='center'>
        <div>
          {descriptions.map((description) => (
            <p className='contact__desc' key={uniqid()} >{description}</p>
          ))}
        </div>
        <div className='left contact__social'>
          <div className='contact__socialItem'>
            <EmailIcon className='icon' />
            { social.email }
          </div>
          <div className='contact__socialItem'>
            <PhoneIcon className='icon' />
            { social.phone }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
