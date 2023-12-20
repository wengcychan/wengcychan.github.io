import { useState } from 'react'
import uniqid from 'uniqid'
import { IoMenu as MenuIcon, IoClose as CloseIcon } from "react-icons/io5"
import { navbar } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {

  const [showNavList, setShowNavList] = useState(false)
  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className={`center nav ${showNavList ? 'nav__showNavList--background': ''}`}>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {navbar.map(({ name, href }) => (
          <li key={ uniqid() } className='nav__list-item'>
            <a
              href={ href }
              onClick={ toggleNavList }
              className='link'
            >
              { name }
            </a>
          </li>
        ))}
      </ul>

      <button
        type='button'
        onClick={ toggleNavList }
        className='btn nav__btn--icon nav__meun'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon className='nav__cross-icon'/> : <MenuIcon className='nav__meun-icon'/>}
      </button>
    </nav>
  )
}

export default Navbar
