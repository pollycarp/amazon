import Header from './Header';
import './App.css';
import Home from './Home'
import Checkout from "./Checkout"
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import checkoutProduct from './CheckoutProduct';
import Login from './Login';
function App() {
  return (
    //BEM
   
    <div className="app">
      <Header />
      <Routes>
      <Route path = "/" element={ <Home/>} />
      <Route path = "checkout" element = {<Checkout />} /> 
      <Route path = "login" element = {<Login />}/> 
       </Routes>
    
    </div>

  );
}

export default App;
