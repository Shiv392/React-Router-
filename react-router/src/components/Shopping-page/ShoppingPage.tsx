import React, { memo, useContext } from 'react';
import '../../styles/ShoppingPage.css';
import  IconButton  from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { CartProductContext } from '../../context/SavedCartProduct';

const ShoppingPage=({itemlist=[]})=>{
   const {cartproduct,setCartProduct}=useContext(CartProductContext);

    console.log('itemlist--------->',itemlist);

    const addCart=(productitem : any)=>{
      console.log('productitem--------->',productitem);
      const findItem=cartproduct.find(ele=> ele.id==productitem.id);
      if(findItem){ //item is already present in tthe cart 
       alert('Product is already present in the cart');
      }
      else{
      setCartProduct([...cartproduct,productitem]);
      }
    }

return(
   <div>
    {
        itemlist.length==0 ? <h1>No Item Found</h1>
         :
         <div className="card-grid">
         {itemlist.map((item) => (
           <div className="card" key={item.id}>
            <h3>{item.title}</h3>
             <img src={item.image} alt={item.title} className="card-img" />
             
             <p>${item.price}</p>
             <IconButton onClick={()=> addCart(item)}>
              <AddShoppingCartSharpIcon />
             </IconButton>
           </div>
         ))}
       </div>
    }

   </div>
)
}
export default ShoppingPage;