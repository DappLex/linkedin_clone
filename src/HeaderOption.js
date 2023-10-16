import React from 'react'
import './HeaderOption.css'

const HeaderOption = ({ avatar, icon, title }) => {

  return (
    <div className='HeaderOption'>
      {icon && <div className="HeaderOption__icon">
        {icon}
      </div>}
      {avatar && <img className="HeaderOption__icon"
        src={avatar}
      />}
      <h5 className='HeaderOption__title'>{title}</h5>
    </div>
  )
}

export default HeaderOption;