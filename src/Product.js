import React from 'react'
import "./Product.css"

function Product({ id, tittle, image, price, rating}) {
  return <div 
  className="product">
     <div className='product__info'>
         <p>{tittle}</p>
         <p className='product__price'>
             <small>$</small>
             <strong>{price}</strong>
         </p>
         <div className='product__rating'>
            {Array (rating)
            .fill()
            .map((_, i) => (
            <p>⭐</p> 
            ))}
            
         </div>
     </div>
      <img 
      src={image}
      alt=''
      /> 
      <button>add to basket</button>
    </div>
  
}

export default Product
