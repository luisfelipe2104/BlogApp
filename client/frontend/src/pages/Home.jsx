import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from "react-router-dom"

function Home() {
  const [posts, setPosts] = useState([])

  const cat = useLocation().search  

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts/get-posts${cat}`)
        setPosts(res.data)
      }catch(err) {
        console.log(err)
      }
    }
    fetchData()
  }, [cat])

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post) => {
          return(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} />
            </div>

            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.descri)}</p>
              <button>Read More</button>

            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home