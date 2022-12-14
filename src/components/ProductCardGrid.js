
import { useEffect } from 'react';
import { useProductContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';


const ProductCardGrid = ({amount, orientation}) => {

     const {productCollection, getProductCollection} = useProductContext()

     useEffect (() => {
       getProductCollection(amount)
     }, [])


  return (
     <>
          {
               productCollection.map(product => <ProductCard key={product.articleNumber} orientation={orientation} item={product}/>)
          }
     </>
  )
}

export default ProductCardGrid