import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { FaInstagram } from 'react-icons/fa'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_m14y4zl',
        'template_eynxkl6',
        form.current,
        'K9S4QfdmoBzJbLOuo'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sugatsujakhu@gmail.com</h5>
            <a
              href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlFCssnJDmqgKSXZPJcjnmDXCHznrDmlnkqfxFLqbGtfcTrmwHPmjZpQpMrzgJCLtJjGzL'
              target='_blank'
            >
              Send a Message
            </a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Sugat Sujakhu</h5>
            <a href='https://m.me/sujalsujakhu'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <FaInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>@sugat_sujakhu</h5>
            <a href='https://www.instagram.com/sugat_sujakhu/'>
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            {' '}
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
