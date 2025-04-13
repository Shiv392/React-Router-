import React, { useEffect, useState } from 'react';
import FilterInput from '../Shopping-page/FilterInput';
import ShoppingPage from '../Shopping-page/ShoppingPage';

const Dashboard = () => {

    const [productlist, setProductList] = useState([]);
    const [filterproductlist, setFilterList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductList();
    }, [])

    const getProductList = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((res) => {
                console.log('res----------->', res)
                setProductList(res);
                setFilterList(res);
                setLoading(false); // done loading
            })
            .catch(err => console.log('error------->', err));
    }

    const filterProduct = (productname: string) => {
        console.log('product name------->', productname)
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
        <div style={{'width':'100%','padding':'10px'}}>
            <h2>Shopping Page</h2>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <>
                    <FilterInput filteritem={filterProduct} />
                    <ShoppingPage itemlist={filterproductlist} />
                </>
            )}
        </div>
    )
}
export default Dashboard;