import React from 'react'
import { Link } from "react-router-dom"
import Menu from '../components/Menu'
import edit from "../img/edit.png"
import Delete from "../img/delete.png"
import logo from "../img/logo.png"

function Single() {
  return (
    <div className='single'>
      <div className="content">
        <img src={logo} alt="" />

        <div className="user">
          <img src={logo} alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis quisquam aliquam culpa fuga!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eveniet voluptate cum praesentium unde doloremque. Pariatur fugiat iusto earum beatae eveniet harum nobis, dolores laborum corrupti quod cumque tempore error.</p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Single