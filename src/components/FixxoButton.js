import React from 'react'
import { NavLink } from 'react-router-dom'

const FixxoButton = ({label, color, to}) => {
  return (
    <div className='fixxo-button-context'>
      <NavLink className='_NavLink' to={to}>
        <button className={`fixxo-button button-${color}`}>
          {label}
        </button>
      </NavLink>
    </div>
  )
}

export default FixxoButton