import Header from './Header';
import './App.css';
import Home from './Home'
import Checkout from "./Checkout"
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import CheckoutProduct from './CheckoutProduct';
function App() {
  return (
    //BEM
   
    <div className="app">
      <Header />
      <Routes>
      <Route path = "/" element={ <Home/>} />
      <Route path = "checkout" element = {<Checkout />} /> 
       </Routes>
    
    </div>

  );
}

export default App;
