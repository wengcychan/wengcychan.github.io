import { useContext, useState } from 'react'
import { MdLightMode as LightModeIcon , MdDarkMode as DarkModeIcon } from "react-icons/md";
import { IoMenu as MenuIcon, IoClose as CloseIcon } from "react-icons/io5";
import { ThemeContext } from '../../contexts/theme'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)

  const [showNavList, setShowNavList] = useState(false)
  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >

        <li className='nav__list-item'>
          <a
            href='#about'
            onClick={toggleNavList}
            className='link nav__link'
          >
            About
          </a>
        </li>

        <li className='nav__list-item'>
          <a
            href='#projects'
            onClick={toggleNavList}
            className='link nav__link'
          >
            Projects
          </a>
        </li>

        <li className='nav__list-item'>
          <a
            href='#skills'
            onClick={toggleNavList}
            className='link nav__link'
          >
            Skills
          </a>
        </li>

        <li className='nav__list-item'>
          <a
            href='#contact'
            onClick={toggleNavList}
            className='link nav__link'
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
        {themeName === 'dark' ? <LightModeIcon className='icon' /> : <DarkModeIcon className='icon'/>}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon className='icon'/> : <MenuIcon className='icon'/>}
      </button>
    </nav>
  )
}

export default Navbar
