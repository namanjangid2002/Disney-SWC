// import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './Images/logo.svg';
// import { NavLink } from 'react-router-dom';

// import Sidebar from './Sidebar';

const Navbar = () => {


  return (
    <div>
        <Nav>
            <Navbrand className='navi'><img src={logo} alt="disney/logo" /></Navbrand>
            {/* <MenuLinks><li><NavLink to ="#" className="nav-link"><img src={home} alt="home" /><span>Home</span></NavLink></li> */}
            {/* <li><NavLink to ="#" className="nav-link"><img src={searchIcon} alt="home" /><span>Search</span></NavLink></li>
            <li><NavLink to ="#" className="nav-link"><img src={WatchIcon} alt="home" /><span>Watch</span></NavLink></li>
            <li><NavLink to ="#" className="nav-link"><img src={origIcon} alt="home" /><span>Originals</span></NavLink></li>
            <li><NavLink to ="#" className="nav-link"><img src={movieIcon} alt="home" /><span>Movie</span></NavLink></li>
            <li><NavLink to ="#" className="nav-link"><img src={seriesIcon} alt="home" /><span>Series</span></NavLink></li></MenuLinks> */}
        </Nav>
        {/* <Sidebar></Sidebar> */}
    </div>
  )
}

const Nav = styled.nav`
background-color: #040714; 
display: flex;`;
const Navbrand = styled.div`
width:101px;
height: auto;
object-position: center;

img{
    width:100%;
    height:auto;
    object-fit:fill;
}`;
// const MenuLinks = styled.div`

// .nav-link li{
//     list-stlye:none;
// }
// .nav-link{
//     text-decoration:none;
//     img{
//         width:1.3rem;
//         height:1.3rem;


//     }
//     span{
//         font-size: 1rem;
//         color:#fff;
//         font-weight:300;
//         letter-spacing:1px;
//         line-height:1.08;

//     }
// }`;
export default Navbar
