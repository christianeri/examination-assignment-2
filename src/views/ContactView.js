import React from 'react'
import MainNavigation from '../sections/MainNavigation'
import Breadcrumb from '../components/Breadcrumb'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

const ContactView = () => {

  window.top.document.title = 'Fixxo | Contact'

  return (
    <>
      <MainNavigation/>
      <Breadcrumb currentPage='Contact'/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default ContactView 