import React from 'react'
import styles from './ContactHeader.module.css'

const ContactHeader = () => {
  return (
    <div className={`${styles.contact_section}`}>
      <h1>Contact Us</h1>
      <p>Let's connect! We are here to help, and would love to hear from you. Whether you have a question
        , comment or just want to say hi, reach out to us through this contact form, or by email, phone or social media!
      </p>
    </div>
  )
}

export default ContactHeader
