import React, { useState } from 'react';
import '../../styles/FilterInput.css';

const FilterInput=({filteritem})=>{
    const [name,setName]=useState('');

    const handleFilterInput=()=>{
        filteritem(name.toLowerCase());
    }

return(
    <div>
        <input type='text' placeholder='Search Products' value={name} onChange={(e)=> setName(e.target.value)} onKeyUp={handleFilterInput} />
    </div>
)
}
export default FilterInput;