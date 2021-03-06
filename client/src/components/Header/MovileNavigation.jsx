import React, { useState } from "react";
import NavLinks from "./NavLinks";
import style from "./NavBar.module.css";
import {GiHamburgerMenu} from "react-icons/gi"
import {IoMdClose} from "react-icons/io"

export default function MovileNavigation() {
  const [open,setOpen] = useState(false)
  let iconClose = <IoMdClose color="#FCF267" className={style.close} cursor="pointer" onClick={()=>setOpen(!open)}/>
  let iconHamburger = <GiHamburgerMenu className={style.hamburger} onClick={()=>setOpen(!open)}/>
  const closeMobileMenu = () => setOpen(false)
  return (
    <div className={style.movileNavigation}>
      {open ? iconClose : iconHamburger}
      {open &&  <NavLinks isMobile = {true} closeMobileMenu = {closeMobileMenu}/>} 

    </div>
  );
}
