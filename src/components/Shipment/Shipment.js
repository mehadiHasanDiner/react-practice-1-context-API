import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(CategoryContext)
    return (
        <div>
            <h3>This is Shipment :  {category}   </h3> 
            <button className ="btn btn-danger" onClick ={() => setCategory(category+1)}>Shipment Increment</button>       
        </div>
    );
};

export default Shipment;