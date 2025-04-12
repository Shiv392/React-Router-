import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navlinks } from '../../constants';
import  '../../styles/navbar.css';

const NavbarStyle={
'display':'flex',
'justifyContent':'space-around',
'alignItems':'center',
'box-shadow': '0 0 3px black'
}

const NavbarLinkStyle={
    'display':'flex',
    'gap':'10px',
    'alignItems':'center',
    'textDecoration':'none',
    'color':'white',
    '&:hover':{
        'color':'red'
    }
}

const Header=()=>{
    const [active,setActive]=useState('');

    useEffect(()=>{
    console.log(window.location.pathname.split('/dashboard/'));
    const currpath=window.location.pathname.split('/dashboard')[1];
    console.log('curr path ------->',currpath)
    if(currpath=='/') setActive('Home');
    else if(currpath=='/about') setActive('About');
    else if(currpath=='/contact') setActive('Contact');

    },[])

    const handleClick=(link : {label:string,route:string})=>{
        console.log('link--------->',link);
        setActive(link.label);
    }

return(
    <header>
        <div style={NavbarStyle}>
            <h3>Welcome To My Profile</h3>
            <nav style={NavbarLinkStyle}>
                {
                    navlinks.map((link,index)=>(
                        <NavLink className={link.label==active ? 'Active':'non-active'} key={index} onClick={()=>handleClick(link)} to={link.route}>{link.label}</NavLink>
                    ))
                }
            </nav>  
        </div>
    </header>
)
}
export default Header;