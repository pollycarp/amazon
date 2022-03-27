
import React, { useState } from 'react'
import './Login.css'
import { Link } from "react-router-dom"
import { auth } from "./firebase"

function Login() {

  
  // const history = useHistory();
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")



  const signIn= e => {
     e.preventDefault()
  
     auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                // history.push('/')
            })
            .catch(error => alert(error.message))
    }

     //some fancy firebase login, *****

  
  const register= e => {
    e.preventDefault()

    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
        // it successfully created a new user with email and password
      console.log(auth);

    })
      .catch(error => alert(error.message))
  }

       //some fancy firebase regiter, 
   

  return (
    <div className='login'>
      <Link to='/'>
      <img className='login__logo'
      src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
      alt='amazon'/>
      </Link>
      
        <div className='login__container'>
         <h1>Sign-in</h1>

         <form>
           <h5>E-mail</h5>
           <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

           <h5>Passord</h5>
           <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

           <button type='submit' onClick={signIn}
           className='login__signInButton'>Sign In
           </button>
         </form>

         <p>
          By signing-in you agree to the Amazon
          Conditions of use & sale.
          Please see our privacy Notice, our cookies Notice
          and our Interest-Based ads Notice. 
         </p>

         <button onClick={register}
          className='login__registerButton'>Create your Amazon Account
          </button>

        </div>

    </div>
  )
}

export default Login