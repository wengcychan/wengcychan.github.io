import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className='scroll-top'>
      <a href='#top' aria-label='scroll-top'>
        <IoIosArrowUp />
      </a>
    </div>
  ) : null
}

export default ScrollToTop
