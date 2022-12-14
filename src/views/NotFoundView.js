import React from 'react'
import NotFound from '../components/NotFound'
import MainNavigation from '../sections/MainNavigation'

const NotFoundView = () => {
  
  window.top.document.title = 'Fixxo | Not Found'

  return (
    <>
      <MainNavigation/>
      <NotFound/>
    </>    
  )
}

export default NotFoundView