import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProductList=()=>{
    const [productlist,setProductList]=useState([]);
    const [loading, setLoading] = useState(true); // add loading
    const [error, setError] = useState(null);     // optional: add error

    useEffect(()=>{
    getProductList();
    },[]);

    const getProductList=async()=>{
        try {
            const res = await axios.get('https://fakestoreapi.com/products');
            setProductList(res.data);
          } catch (err:any) {
            console.log('error---------->', err);
            setError(err);
          } finally {
            setLoading(false);
          }
    }
    return { productlist, loading, error }; // return all needed values
}
export default useGetProductList;