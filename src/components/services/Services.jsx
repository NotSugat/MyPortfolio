import React from "react"
import "./services.css"
import { AiOutlineCheck } from "react-icons/ai"

function Services() {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Creating of good UI interface</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Engaging User Experience</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Clear Navigation of Webpages</p>
            </li>
          </ul>
        </article>

        {/* End of UI/UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Single page landing page</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Multiple Page website</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Creation of Full stack Website</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Basic Website using HTML/CSS</p>
            </li>
          </ul>
        </article>

        {/* End of web development */}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Successfully handled Facebook Pages</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Good Understanding of social Media SEO</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>
                Used Digital Marketing Skills, Social Media Marketing Skills
              </p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>
                Record and edit video for use as social content and digital
                content
              </p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>
                Promoted targeted content through various social networking
                sites
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
