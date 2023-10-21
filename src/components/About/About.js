import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from '../../portfolio'; 
import './About.css';


const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about left'>
      
        <h1>
          <span>hello<span id='pur-color'>.hi()</span></span><br></br>
          <span>i'm<span id='pur-color'>.balaji viswanadh()</span></span>
        </h1>
         <h3 id='gray-color'>//i am a Fullstack Developer, UI&UX designer.</h3>
      <p id='green-color'>//a Computer Science Enginer, pursuing my B.tech 3rd year at VIT AP University.</p>


      <div className='about__contact center'>
        {resume && (
          <a href='https://drive.google.com/file/d/1RfcyiuAm6_kuGkDZgOT1WRuSjwLZ98U1/view?usp=drivesdk'>
            <span id='resume-box' type='button' className='btn btn--outline'>
            <span id='gray-color'>my</span><span id='pur-color'>.resume()</span>
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About