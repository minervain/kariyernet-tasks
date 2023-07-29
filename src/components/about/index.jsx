import React from 'react'
import './about.css'
import About2 from './about2'
function About() {
  return (
    <div>
        <div className="about">
            <h1 className='aboutme'>About Me</h1>
            <span class="subtitle">This is what I do.</span>
        </div>
        <About2/>
    </div>
  )
}

export default About