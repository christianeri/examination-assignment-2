import React, { useEffect } from 'react'

// import Section from '../components/Section';
// import ProductCardGrid from '../components/ProductCardGrid';

import MainNavigation from '../sections/MainNavigation'
import Hero from '../sections/Hero';
import SplitBanner from '../sections/BannerSplit';
import FeaturedProducts from '../sections/FeaturedProducts';
import DoubleBanner from '../sections/BannerDouble';
import CustomerInfoShowcase from '../sections/CustomerInfoShowcase';
import ProductPromoShowcase from '../sections/ProductPromoShowcase';
import SingleBanner from '../sections/BannerSingle';
import ProductToplistShowcase from '../sections/ProductToplistShowcase';
import CustomerInfoMenu from '../sections/CustomerInfoMenu';
import Footer from '../sections/Footer';

import { useProductContext } from '../contexts/ProductContext';



const HomeView = () => {

  window.top.document.title = 'Fixxo'

  // const productContext = useContext(ProductContext);

  const {featuredProducts, getFeaturedProducts, showcaseProducts, getShowcaseProducts, toplistProducts, getToplistProducts} = useProductContext()

  useEffect (() => {
    getFeaturedProducts(8)
  }, [])

  useEffect (() => {
    getShowcaseProducts(4)
  }, [])

  useEffect (() => {
    getToplistProducts(3)
  }, [])


  return (
    <>
      <MainNavigation/>
      <Hero/>
      <SplitBanner/>
        {/* <Section title='All Products' body={<ProductCardGrid orientation='vertical' amount='8'/>} container='container' breakSM="1" breakMD="2" breakLG="4" breakXL="4"/> */}
      <FeaturedProducts title='Featured Products' sectionName='featured-products' items={featuredProducts}/>
      <DoubleBanner/>
      <CustomerInfoShowcase/>
      <ProductPromoShowcase items={showcaseProducts}/>
      <SingleBanner/>
      <ProductToplistShowcase items={toplistProducts}/>
      <CustomerInfoMenu/>
      <Footer/>     
    </>
  )
}

export default HomeView