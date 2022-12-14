import { useContext, useState } from 'react';
import {createContext} from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
     return useContext(ProductContext)
}

export const ProductProvider = ({children}) => {

     const url = 'https://win22-webapi.azurewebsites.net/api/products'

     const [product, setProduct] = useState({})
     // const [products, setProducts] = useState([])

     const [featuredProducts, setFeaturedProducts] = useState([])
     const [showcaseProducts, setShowcaseProducts] = useState([])
     const [toplistProducts, setToplistProducts] = useState([])

     const [productCollection, setProductCollection] = useState([])
     

     const getProduct = async (articleNumber) => {
          const result = await fetch(url + `/${articleNumber}`)
          setProduct(await result.json())
     }

     // const getProducts = async () => {
     //      const result = await fetch(url)
     //      setProducts(await result.json())
     // }
     
     const getFeaturedProducts = async (take = 0) => {
          const result = await fetch(url + `?take=${take}`)
          setFeaturedProducts(await result.json())          
     }
     
     const getShowcaseProducts = async (take = 0) => {
          const result = await fetch(url + `?take=${take}`)
          setShowcaseProducts(await result.json())          
     }
     
     const getToplistProducts = async (take = 0) => {
          const result = await fetch(url + `?take=${take}`)
          setToplistProducts(await result.json())          
     }
     
     const getProductCollection = async (take = 0) => {
          const result = await fetch(url + `?take=${take}`)
          setProductCollection(await result.json())          
     }


     return <ProductContext.Provider value={{
                    product, getProduct, 
                    // products, getProducts, 
                    featuredProducts, getFeaturedProducts, 
                    showcaseProducts, getShowcaseProducts, 
                    toplistProducts, getToplistProducts, 
                    productCollection, getProductCollection}}>

          {children}
     </ProductContext.Provider>
}