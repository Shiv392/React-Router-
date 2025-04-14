import React, { useContext } from 'react';
import { CartProductContext } from '../context/SavedCartProduct';
import '../styles/ShoppingPage.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

const CartList=()=>{
   const {cartproduct,setCartProduct}=useContext(CartProductContext);
   const navigate=useNavigate();

   const removeCartItem=(item)=>{
    const filteredItem=cartproduct.filter(ele=> ele.id!=item.id);
    setCartProduct(filteredItem);
   }

   const ShoppingPageRedirect=()=>{
    navigate('/dashboard/')
   }

   return(
    <div>
       {
        cartproduct.length==0 ? 
        <div>
         <h1>Add Product to cart </h1> 
         <button onClick={ShoppingPageRedirect}>Go to Shopping</button>
         </div>
        : 
        <div className="card-grid">
         {cartproduct.map((item,index) => (
           <div className="card" key={item.id}>
            <h3>{item.title && item.title.length>20 ? item.title.substring(0,40)+'...' : item.title}</h3>
             <img src={item.image} alt={item.title} className="card-img" />
             
             <p>${item.price}</p>
             <Button variant="contained">Checkout</Button>
             <IconButton onClick={()=> removeCartItem(item)}>
                <DeleteIcon />
             </IconButton>
           </div>
         ))}
       </div>
       }
    </div>
   )

}
export default CartList;