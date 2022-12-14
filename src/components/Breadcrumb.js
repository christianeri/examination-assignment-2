import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = ({currentPage}) => {
  return (
     <div className='container'>
          <div className='breadcrumb'>
               <ul>
                    <li className='page previous'>
                         <NavLink to="/" end>
                              <h4>Home</h4>
                         </NavLink> 
                    </li>
                    <li className='separator'>
                         <h4>&nbsp;/&nbsp;</h4>
                    </li>
                    <li className='page current'>
                         <NavLink>
                              <h4>{currentPage}</h4>
                         </NavLink>
                    </li>
               </ul>
          </div>
     </div>
  )
}

export default Breadcrumb