import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CatagoryDetail = (props) => {
    const {name} = props.product;
    const category = useContext(CategoryContext);
    return (
        <div>
            <h3>This is your Category Detail  </h3>
            <h5> Selected Category : {category}</h5>
        </div>
    );
};

export default CatagoryDetail;