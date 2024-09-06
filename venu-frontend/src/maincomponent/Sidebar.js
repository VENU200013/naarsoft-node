import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

function Sidebar() {
  return (
    <>
    <div className="sidebar ">
        <Link to="/dashboard" className='span-tag'>
        <span>
            Dashboard
        </span>
        
        </Link>

    </div>
    </>
  )
}

export default Sidebar