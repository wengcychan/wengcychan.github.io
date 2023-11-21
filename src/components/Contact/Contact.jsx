import uniqid from 'uniqid'
// import EmailIcon from '@material-ui/icons/Email'
// import PhoneIcon from '@material-ui/icons/Phone'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  
  const { descriptions, social } = contact

  return (
    // <section className='section contact center' id='contact'>
    //   <h2 className='section__title'>Contact</h2>
    //   <a href={`mailto:${contact.email}`}>
    //     <span type='button' className='btn btn--outline'>
    //       Email me
    //     </span>
    //   </a>
    // </section>

    <section id='contact' className='section contact'>
      <h2 className='section__title'>Get In Touch</h2>
      <div className='center'>
        <div>
          {descriptions.map((description) => (
            <p className='contact__desc' key={uniqid()} >{description}</p>
          ))}
        </div>
        <div className='left contact__social'>
          <div className='contact__socialItem'>
            {/* <EmailIcon className='icon'/> */}
            { social.email }
          </div>
          <div className='contact__socialItem'>
          {/* <PhoneIcon className='icon'/> */}
            { social.phone }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
