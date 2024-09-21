import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ img, name, url }) => {
  return (
    <Link to={url} target='_blank' className="flex items-center justify-center duration-200 ease-in-out rounded-sm cursor-pointer hover:bg-white/20 size-9">
        <img
        src={img}
        alt={name} 
        className="w-5" />
    </Link>
  )
}

export default NavItem
