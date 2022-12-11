import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { HiBars3CenterLeft } from 'react-icons/hi2'
import { FiSearch } from 'react-icons/fi'
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import { BsFillCaretDownFill } from 'react-icons/bs'
import './header.css'
import Dropdown from '../../components/Dropdown'

const Header = () => {

  // const [categoryMenuDropdownShowStatue, setCategoryMenuDropdownShowStatue] = useState(false)
  // let categoryMenuDropdown = useRef();

  // useEffect(()=>{
  //   document.addEventListener("click", function(e) {
  //     if(categoryMenuDropdown.current.contains(e.currentTarget.activeElement)){
  //       setCategoryMenuDropdownShowStatue(true)
  //     }
  //     else{
  //       setCategoryMenuDropdownShowStatue(false)
  //     }
  //   })
  // }, [])

  return (
    <header className='header'>
      <nav className="navbar">
          <div className="navbar__top">
            <div className="container">
              <Link to="/" className="navbar__logo">
                <img src="./assets/images/logo/logo.png" alt="Logo" />
              </Link>
              <ul className="navbar__nav list-unstyled">
                <li className="navbar__item">
                  <NavLink to="/" className="navbar__link" data-text="Home">Home</NavLink>
                </li>
                <li className="navbar__item">
                  <NavLink to="shop" className="navbar__link" data-text="Shop">Shop</NavLink>
                </li>
                <li className="navbar__item">
                  <NavLink to="about" className="navbar__link" data-text="About">About</NavLink>
                </li>
                <li className="navbar__item">
                  <NavLink to="contact" className="navbar__link" data-text="Contacts">Contacts</NavLink>
                </li>
                <li className="navbar__item">
                  <NavLink to="journal" className="navbar__link" data-text="Journal">Journal</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar__bottom">
            <div className="container">
              <Dropdown />
              <div className="navbar__searchbar">
                <input type="search" placeholder='Search Products' className='navbar__searchbar__input' />
                <FiSearch className="navbar__searchbar__icon" />
              </div>
              <div className="navbar__list">
                {/* <div className="dropdown">
                  <button type='button' className="btn btn--text" ref={categoryMenuDropdown}>
                    <FaUserAlt className='btn__icon' />
                    <BsFillCaretDownFill className='btn__icon btn__icon--sm btn__text--right' />
                  </button>
                  <div className="dropdown__menu" aria-expanded={categoryMenuDropdownShowStatue}>
                    <Link to="#1" className='dropdown__menu__item'>Link Item</Link>
                    <Link to="#2" className='dropdown__menu__item'>Link Item</Link>
                  </div>
                </div> */}
                <Dropdown />
                <div className="dropdown">
                  <button type='button' className="btn btn--text">
                    <FaShoppingCart className='btn__icon' />
                  </button>
                </div>
              </div>
            </div>
          </div>
      </nav>
    </header>
  )
}

export default Header