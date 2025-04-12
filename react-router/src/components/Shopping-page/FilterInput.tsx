import React, { useEffect, useState } from 'react';
import '../../styles/FilterInput.css';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const FilterInput=({filteritem})=>{
    const [name,setName]=useState('');

    useEffect(()=>{
        const delayDebounce = setTimeout(() => {
            filteritem(name.toLowerCase());
          }, 500); // 300ms debounce delay
      
          return () => clearTimeout(delayDebounce); // Cleanup old timers
    },[name])

    const clearSearch=()=>{
        setName('');
        filteritem('');
    }

return(
    <div style={{'display':'flex'}}>
        <input type='text' placeholder='Search Products' value={name} onChange={(e)=> setName(e.target.value)}/>
        <span>
        {
            name.trim().length>0 ?
             <IconButton style={{'marginLeft':'-38px'}} onClick={clearSearch}>
              <CloseIcon />
            </IconButton> : ''
        }
        </span>
    </div>
)
}
export default FilterInput;