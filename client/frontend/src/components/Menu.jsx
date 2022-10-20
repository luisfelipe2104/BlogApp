import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Menu({cat}) {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts/get-posts?cat=${cat}`)
        setPosts(res.data)
        console.log(res.data)
      }catch(err) {
        console.log(err)
      }
    }
    fetchData()
  }, [cat])

  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>

        {posts.map(post => {
          return( 
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
          )
        })}
    </div>
  )
}

export default Menu