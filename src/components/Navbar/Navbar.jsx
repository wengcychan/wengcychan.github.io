import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)

  return (
    <nav className='center nav'>
      <ul
        style={ {display : 'flex'} }
        className='nav__list'
      >

        <li className='nav__list-item'>
          <a
            href='#projects'
            className='link link--nav'
          >
            About
          </a>
        </li>


        <li className='nav__list-item'>
          <a
            href='#projects'
            className='link link--nav'
          >
            Projects
          </a>
        </li>

        <li className='nav__list-item'>
          <a
            href='#skills'
            className='link link--nav'
          >
            Skills
          </a>
        </li>

        <li className='nav__list-item'>
          <a
            href='#contact'
            className='link link--nav'
          >
            Contact
          </a>
        </li>
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
    </nav>
  )
}

export default Navbar
