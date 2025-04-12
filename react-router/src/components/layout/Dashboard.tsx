import React, { useEffect, useState } from 'react';
import FilterInput from '../Shopping-page/FilterInput';
import ShoppingPage from '../Shopping-page/ShoppingPage';

const Dashboard = () => {

    const [productlist, setProductList] = useState([]);
    const [filterproductlist, setFilterList] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((res) => {
                console.log('res----------->', res)
                setProductList(res);
                setFilterList(res);
            })
            .catch(err => console.log('error------->', err));
    }, [])

    const filterProduct = (productname: string) => {
        console.log('product name------->',productname)
        if (productname.trim().length == 0) {
            setFilterList(productlist);
        }
        else {
            const filterProduct = productlist.filter(ele =>
                ele.category.toLowerCase().includes(productname) ||
                ele.description.toLowerCase().includes(productname) ||
                ele.title.toLowerCase().includes(productname)
            )
            setFilterList(filterProduct);
        }
    }

    return (
        <div>
            <h2>Shopping Page</h2>
            <FilterInput filteritem={filterProduct} />
            <div>
                <ShoppingPage itemlist={filterproductlist} />
            </div>
        </div>
    )
}
export default Dashboard;