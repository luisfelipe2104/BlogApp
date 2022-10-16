import React from 'react'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className='home'>
      {/* <div className="post">
        {posts.map(post => {
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} />
            </div>

            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>

            </div>
          </div>
        })}
      </div> */}
    </div>
  )
}

export default Home