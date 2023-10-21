import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3 id='logo'>
        {homepage ? (
          <a href="#" className='link'>
            <span id='green-color'>my</span><span id='pur-color'>{title}</span>
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header