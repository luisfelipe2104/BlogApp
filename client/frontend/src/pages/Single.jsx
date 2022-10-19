import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import Menu from '../components/Menu'
import edit from "../img/edit.png"
import Delete from "../img/delete.png"
import logo from "../img/logo.png"
import axios from 'axios'
import { AuthContext } from '../context/authContext'
import moment from "moment"
// npm i moment

function Single() {
  const [post, setPost] = useState([])

  const location = useLocation()

  const postId = location.pathname.split("/")[2] // gets the id in the url
  
  const {currentUser} = useContext(AuthContext) // gets the user's information that is stored in the local storage

  const navigate = useNavigate()

  const handleDelete = async () => {
    try{
      await axios.delete(`/posts/delete-post/${postId}`)
      navigate("/")
    }catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts/get-post/${postId}`)
        setPost(res.data)
        console.log(res.data)
      }catch(err) {
        console.log(err)
      }
    }
    fetchData()
  }, [postId])

  return (
    <div className='single'>
      <div className="content">
        <img src={post?.img} alt="" />

        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser ? currentUser.username === post.username && <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={edit} alt="edit" />
            </Link>
            <img onClick={handleDelete} src={Delete} alt="delete" />
          </div> : null}
        </div>
        <h1>{post.title}</h1>
        <p>{post.descri}</p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Single