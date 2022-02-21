import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from"./Subtotal"

function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div classNAme ="checkout__left">
    <img 
    className='checkout__ad' 
    src='https://cdn.andnowuknow.com/mainStoryImage/amazon_newstore_111119.png?2elFDH.NARL3RqUKy0Nq2e.e1THgJeWI'
    alt=""
    />
    
      <div>
       <h2 className='checkout__title'>
         Your shopping Basket
       </h2>
       {basket.map(item =>(
         <CheckoutProduct
         id={item.id}
         tittle={item.tittle}
         image={item.image}
         price={item.price}
         rating={item.rating}
         />
       ))}
 
      </div>
     </div>

       <div className='checkout__right'>
      <Subtotal />
       </div>
    </div>
  )
}

export default Checkout
