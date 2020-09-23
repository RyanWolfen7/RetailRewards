import React, { useState } from 'react'
import { NavContainer, Title, Hamburger } from '../../styles/NavBarStyles'
import SideBar from './SideBar'

const NavBar = props => {
    const { navLinks, homeLink } = props
    const [sideBar, setSideBar ] = useState({ open: false })

    const openSideBar = () => { setSideBar({...sideBar, open: !sideBar.open})}

    return (
        <NavContainer>
            <Hamburger onClick={() => openSideBar()}/>
            <Title onClick={() => { window.location.replace(homeLink)}}> RetailRewards </Title>
            <SideBar {...sideBar} openSideBar={openSideBar} navLinks={navLinks} />
        </NavContainer>
    )
}

export default NavBar