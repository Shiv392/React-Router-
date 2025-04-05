import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarStyle={
'display':'flex',
'justify-content':'space-between'
}

const NavbarLinkStyle={
    'display':'flex',
    'gap':'10px',
    'align-items':'center',
    'text-decoration':'none',
    'color':'white',
    '&:hover':{
        'color':'red'
    }
}
const Header=()=>{
return(
    <header>
        <div style={NavbarStyle}>
            <h3>Welcome To My Profile</h3>
            <nav style={NavbarLinkStyle}>
                <NavLink to='/dashboard/'>Home</NavLink>
                <NavLink to='/dashboard/about'>About</NavLink>
                <NavLink to='/dashboard/contact'>Contact</NavLink>
            </nav>
        </div>
    </header>
)
}
export default Header;