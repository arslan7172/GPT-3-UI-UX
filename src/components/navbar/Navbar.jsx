import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import images from '../../assets/index'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className='gpt3__navbar'>

      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={images.logosvg} alt='logosvg__img' />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>

      <div className='gpt3__navbar-menu'>
        <RiMenu3Line color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {
          toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <RiCloseLine color='#fff' fontSize={27} onClick={() => setToggleMenu(false)} />
              <div className='gpt3__navbar-menu_container-links'>
                <p><a href="#home">Home</a></p>
                <p><a href="#wgpt3">What is GPT3?</a></p>
                <p><a href="#possibility">Open AI</a></p>
                <p><a href="#features">Case Studies</a></p>
                <p><a href="#blog">Library</a></p>
              </div>
              <div className="gpt3__navbar-menu_container-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar