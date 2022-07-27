import React, { useEffect, useState } from "react";
import { NavbarContainer, NavbarLogo, NavbarLeft, NavbarRight, NavbarMenu, NavbarLink, NavbarSearch, NavbarInput, NavbarUser } from './navbar.element'
import { MdArrowDropDown, MdSearch } from 'react-icons/md'

function Navbar({ searchTern, setSearchTern }) {

    const [show, setShow] = useState(false)
    const [searching, setSearching] = useState(false)

    useEffect(() => {
      window.addEventListener("scroll", () => 
        window.scrollY > 100 ? setShow(true) : setShow(false))
        return () => window.removeEventListener("scroll", null)
    },[])

  return (
    <NavbarContainer show={show}>
      <NavbarLeft>
        <NavbarLogo to="/" aria-label="Netflix" />
        <NavbarMenu>
          <NavbarLink to="/netflix/movies">Movies</NavbarLink>
          <NavbarLink to="/netflix/serise">Serise</NavbarLink>
        </NavbarMenu>
      </NavbarLeft>
      <NavbarRight>
        <NavbarSearch searching={searching}>
          <MdSearch onClick={() => setSearching(!searching)}/>
          <NavbarInput placeholder="Search..." searching={searching} value={searchTern} onChange={(e) => setSearchTern(e.target.value)}/>
        </NavbarSearch>
        <NavbarUser src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user icon" />
        <MdArrowDropDown />
      </NavbarRight>
    </NavbarContainer>
  )
}

export default Navbar;
