import React, { useState,useRef } from 'react'
import './Navbar.css'
import logo from "../../assets/logo_2.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
    const [menu, setmenu] = useState("")
    const menuRef = useRef();
    const openMenu=()=>{
        menuRef.current.style.right='0';
    }
    const closeMenu=()=>{
        menuRef.current.style.right='-350px';
    }
    return (
        <div className='navbar'>
            <img src={logo} alt="" style={{ width: '150px', height: 'auto' }}/>
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setmenu("home")}>Home</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setmenu("about")}>About Me</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setmenu("services")}>Services</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setmenu("work")}>Portfolio</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setmenu("contact")}>Contact</p></AnchorLink></li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        </div>
    )
}

export default Navbar
