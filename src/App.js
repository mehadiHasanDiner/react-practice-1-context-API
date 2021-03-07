import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import Header from './components/Header/Header';
import { createContext, useState } from 'react';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState('laptop');

  return (
    <CategoryContext.Provider value ={[category, setCategory]} className ="container">
      <p>Count Value: {category}</p>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
