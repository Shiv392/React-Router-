import { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { navlinks } from '../../constants';
import  '../../styles/navbar.css';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import IconButton  from '@mui/material/IconButton';
import  Badge  from '@mui/material/Badge';
import { CartProductContext } from '../../context/SavedCartProduct';

const NavbarStyle={
'display':'flex',
'justifyContent':'space-around',
'alignItems':'center',
'boxShadow': '0 0 3px black',
'position' : 'fixed',
'top':'0',
'left':'0',
'right':'0',
'height':'70px',
'backgroundColor':'#ffabe4',
'zIndex':'1000'
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
    const {cartproduct,setCartProduct}=useContext(CartProductContext);
    const navigate = useNavigate();

    useEffect(()=>{
    console.log(window.location.pathname.split('/dashboard/'));
    const currpath=window.location.pathname.split('/dashboard')[1];
    console.log('curr path ------->',currpath)
    if(currpath=='/') setActive('Home');
    else if(currpath=='/about') setActive('About');
    else if(currpath=='/contact') setActive('Contact');

    return()=> {
        setActive('');
    }

    },[])

    const handleClick=(link : {label:string,route:string})=>{
        console.log('link--------->',link);
        setActive(link.label);
    }

    const addToCartBtnClick=()=>{
     navigate('/dashboard/savedcart');
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
            <span>
            <IconButton onClick={()=> addToCartBtnClick()}>
            <Badge badgeContent={cartproduct.length ||0} color="primary" showZero>
                <AddShoppingCartSharpIcon />
            </Badge>
            </IconButton>
            </span>
        </div>
    </header>
)
}
export default Header;