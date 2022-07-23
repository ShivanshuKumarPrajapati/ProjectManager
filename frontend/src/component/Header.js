import React from 'react'
import logo from './asset/logo.png';

const Header = () => {
  return (
      <nav className="navbar bg-light mb-4 p-0">
          <div className="container">
              <a href="/" className="navbar-brand">
                  <div className="d-flex">
                      <img src={logo} alt="img" className='mr-2' />
                      <div>Project Manager</div>
                  </div>
              </a></div>
      </nav>
  )
}

export default Header