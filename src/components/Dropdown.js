import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiBars3CenterLeft } from 'react-icons/hi2'

const Dropdown = () => {
    const [currentDropdownShowStatue, setCurrentDropdownShowStatue] = useState(false)
    let currentDropdown = useRef();

    useEffect(()=>{
        document.addEventListener("click", function(e) {
            if(currentDropdown.current.contains(e.currentTarget.activeElement)){
                setCurrentDropdownShowStatue(true)
            }
            else{
                setCurrentDropdownShowStatue(false)
            }
        })
    }, [])

    return (
        <div className="dropdown">
            <button type='button' className="dropdown__toggler btn btn--text" ref={currentDropdown}>
                <HiBars3CenterLeft className='btn__icon btn__icon--lg' />
                <span className='btn__text btn__text--right'>Shop by Category</span>
            </button>
            <div className="dropdown__menu" aria-expanded={currentDropdownShowStatue}>
                <Link to="#1" className='dropdown__menu__item'>Link Item</Link>
                <Link to="#2" className='dropdown__menu__item'>Link Item</Link>
            </div>
        </div>
    )
}

export default Dropdown