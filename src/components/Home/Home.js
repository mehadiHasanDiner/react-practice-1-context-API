import React from 'react';
import Catagories from '../Catagories/Catagories';

const Home = (props) => {
    const {count} = props;
    return (
        <div style ={{border: '1px solid purple'}}>
            <h1>This is Home : {count}</h1>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;