import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (

    <section className='section skills' id='skills'>
      <h2 >my<span id='pur-color'>.skills()</span></h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li  id='skill-box' key={uniqid()} className='skills__list-item btn btn--plain'>
            <span id='skill-weight'>//{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills