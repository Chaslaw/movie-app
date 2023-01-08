import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <span onClick={() => {window.scroll(0,0)}} className="header">TV SHOWS HUB</span>
  )
}

export default Header