import uniqid from 'uniqid'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  
  const { descriptions, social, icons } = contact
  const { email, phone } = social
  const { EmailIcon, PhoneIcon } = icons

  return (
    <section id='contact' className='section'>
      <h1 className='section__title'>Get In Touch</h1>

      <div>
        {descriptions.map(description =>
          <p className='contact__desc' key={ uniqid() }>
            { description }
          </p>
        )}
      </div>

      <div className='center contact__social'>
        <a href={ email.address }>
          <div type='button' className='btn__section contact__btn'>
            <EmailIcon className='btn__section__icon' />
            { email.text }
          </div>
        </a>
        <a href={ phone.address }>
          <div type='button' className='btn__section contact__btn'>
            <PhoneIcon className='btn__section__icon' />
            { phone.text }
          </div>
        </a>
      </div>

    </section>
  )
}

export default Contact
