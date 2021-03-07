import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import Header from './components/Header/Header';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count Value: {count}</p>
      <Header count = {count} setCount ={setCount}></Header>
      <Home count ={count}></Home>
      <Shipment></Shipment>
    </div>
  );
}

export default App;
