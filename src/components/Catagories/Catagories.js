import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CatagoryDetail from '../CatagoryDetail/CatagoryDetail';

const allProducts = [
    {name : 'Lenevo', category: 'laptop'}, {name : 'HP', category: 'laptop'},
    {name : 'Redmi', category: 'mobile'}, {name : 'Vivo', category: 'mobile'},
    {name : 'Canon', category: 'camera'}, {name : 'Sony', category: 'camera'},
]
const Catagories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProduct] = useState([]);
    useEffect(() => {
    console.log(category);
        const matchedProducts = allProducts.filter (pd => pd.category  === category);
        setProduct (matchedProducts);
    }, [category])
    return (
        <div>
            <h2>Select your Category :{category} </h2>
            {
                products.map(pd =><CatagoryDetail product ={pd}></CatagoryDetail>)
            }
        </div>
    );
};

export default Catagories;