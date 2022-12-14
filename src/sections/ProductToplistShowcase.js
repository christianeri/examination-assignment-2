// import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductToplistShowcase = ({items = []}) => {
  return (
          <section className='product-top-lists'>
               <div className='container'>
                    <div className='left'>
                         <h4>Latest Products</h4>
                         {
                              items.map(product => <ProductCard key={product.articleNumber} orientation='horizontal' item={product}/>)
                         }
                    </div>
                    <div className='center'>
                         <h4>Best Selling Products</h4>
                         {
                         items.map(product => <ProductCard key={product.articleNumber} orientation='horizontal' item={product}/>)
                         }
                    </div>
                    <div className='right'>
                         <h4>Top Rated Products</h4>
                         {
                         items.map(product => <ProductCard key={product.articleNumber} orientation='horizontal' item={product}/>)
                         }
                    </div>
               </div>
          </section>
  )
}

export default ProductToplistShowcase