
import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { useShoppingCart } from '../contexts/ShoppingCartContext'


const ProductCard = ({orientation, item}) => {

     const { incrementQuantity } = useShoppingCart()


     const addToWishlist = (event) => {
          console.log('Added to Wishlist')
     }
     const addToCompare = (event) => {
          console.log('Added to Compare list')
     }



  return (

     <div className='card'>
          <div className={`${orientation}-card`}>
               <div className='card-img'>
                    <img src={item.imageName} alt={item.name}/>
               </div>               
               <div className='card-overlay'></div>
               <ul className='card-overlay-menu'>
                    <li>
                         <button className="nav-button nav-button-small" onClick={addToWishlist}>
                              <i className="fa-regular fa-heart"></i>        
                         </button>
                    </li>
                    <li>
                         <button className="nav-button nav-button-small" onClick={addToCompare}>
                              <i className="fa-regular fa-code-compare"></i>
                         </button>
                    </li>
                    <li>
                         <button className="nav-button nav-button-small" 
                         onClick={() => incrementQuantity(
                              {articleNumber: item.articleNumber, product: item})}>
                              
                              <i className="fa-regular fa-bag-shopping"></i>  
                         </button>
                    </li>
               </ul>
               {/* <NavLink to={`/products/${item.name.toLowerCase().replace(/ /gi, "-")}`}> */}
               <NavLink to={`/product/${item.articleNumber}`}>
                    <button className='fixxo-button button-theme'>quick view</button>
               </NavLink>
               
               <div className="card-body">
                    <div>
                         <h5 className='card-category' id="product-category">{item.category}</h5>                         
                         <h4 className="card-title">{item.name}</h4>
                    </div>
                    <div>
                         <div className="card-rating" id="product-rating">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                         </div>
                         <span>
                              {/* <h3 className="card-previous-price br">
                              {item.previousPrice}
                              </h3> */}

                              <h3 className="card-price">
                              €{item.price}
                              </h3>
                         </span>
                    </div>
               </div>
          </div>
     </div>

  )
}

export default ProductCard