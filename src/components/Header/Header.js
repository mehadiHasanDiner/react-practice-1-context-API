import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
           <h1> This is Header : {category}   </h1>
           <Button className = "btn-info" onClick = {() => setCategory('Laptop')}>Laptop</Button>         
           <Button className = "btn-success" onClick = {() => setCategory('Mobile')}>Mobile</Button>         
           <Button className = "btn-danger" onClick = {() => setCategory('Camera')}>Camera</Button>         
        </div>
    );
};

export default Header;