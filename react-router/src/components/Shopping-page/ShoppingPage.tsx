import React, { memo } from 'react';
import '../../styles/ShoppingPage.css';

const ShoppingPage=({itemlist=[]})=>{

    console.log('itemlist--------->',itemlist);

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
           </div>
         ))}
       </div>
    }

   </div>
)
}
export default ShoppingPage;