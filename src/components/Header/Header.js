import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

const Header = (props) => {
    const {count, setCount} = props;
    return (
        <div>
           <h1> This is Header : {count}   </h1>
           <Button className = "btn" onClick = {() => setCount(count+1)}>Increment</Button>         
        </div>
    );
};

export default Header;