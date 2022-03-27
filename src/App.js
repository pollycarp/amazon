
import Header from './Header';
import './App.css';
import Home from './Home'
import Checkout from "./Checkout"
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import checkoutProduct from './CheckoutProduct';
import Login from './Login';
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider"

function App() {
  const [{}, dispatch] = useStateValue()

  // useEffect(() => {
  //   //will only run once when th app component loads

  //    auth.onAuthStateChanged(authUser =>{
  //      console.log('THE USER IS ...', authUser);
       
  //      if (authUser) {
  //        //the user just logged in / the user was logged in
          
  //        dispatch({
  //          type: 'SET_USER',
  //          user: authUser
  //        })

  //       } else {
  //        //the user is logged out 
  //        dispatch({
  //          type: 'SET_USER',
  //          user: null
  //        })
  //      }
  //    })

  // }, [])
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
