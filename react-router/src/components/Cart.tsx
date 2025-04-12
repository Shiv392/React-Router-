import React, { useContext } from 'react';
import { CartProductContext } from '../context/SavedCartProduct';
import '../styles/ShoppingPage.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const CartList=()=>{
   const {cartproduct,setCartProduct}=useContext(CartProductContext);

   const removeCartItem=(item)=>{
    const filteredItem=cartproduct.filter(ele=> ele.id!=item.id);
    setCartProduct(filteredItem);
   }

   return(
    <div>
       {
        cartproduct.length==0 ? <h1>No Product, Go and Select </h1> : 
        <div className="card-grid">
         {cartproduct.map((item,index) => (
           <div className="card" key={item.id}>
            <h3>{item.title}</h3>
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