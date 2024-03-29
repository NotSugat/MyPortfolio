import React from "react"
import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
          </div>
        </div>

        {/*  End of FrontEnd */}
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>Express JS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>Mongo DB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__detail'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
