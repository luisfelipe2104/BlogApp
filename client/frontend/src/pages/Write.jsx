import React, { useState } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AwaitImage from '../firebase/uploadImage.js';
import { useLocation } from "react-router-dom"
import axios from 'axios';
import { storage } from "../firebase/configs.js"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"


function Write() {
  const [img, setImg] = useState(null)
  const [imgUrl, setImgUrl] = useState(null)
  const state = useLocation().state
  
  const [value, setValue] = useState(state?.title || "")
  const [title, setTitle] = useState(state?.desc || "")
  const [cat, setCat] = useState(state?.cat || "")
  
  const AwaitImage = new Promise((resolve, reject) => {
      
          // console.log(img)
          if(img){ 
          const imageName = img.lastModified + img.size + img.name
  
          // console.log(imageName)
  
          const imageRef = ref(storage, imageName)
          uploadBytes(imageRef, img)
          .then(() => {
              getDownloadURL(imageRef)
              .then((url) => {
                  setImgUrl(url)
                  resolve(url)
              })
          })
        }
  })
  
  const handleClick = async (e) => {
    e.preventDefault()
    AwaitImage.then(async (url) => {
      console.log(url)
      setImg(null)
    
    try{
      state ? await axios.put(`posts/update-post/${state.id}`, {
        title, 
        descri: value, 
        cat, 
        img: imgUrl ? imgUrl : "" 
      })
      :
      console.log("sdjlkefjlrk")
      await axios.post(`posts/add-post`, {
        title, 
        descri: value, 
        cat, 
        img: url ? url : "" 
      })
    }catch(err){
      console.log(err)
    }
  })
  }

  return (
    <div className='add'>
      <div className="content">
        <input type="text" value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish {imgUrl}</h1>
          <span>
            <b>Status: </b> Draft
          </span>

          <span>
            <b>Visibility: </b> Public
          </span>

          <input onChange={(e) => setImg(e.target.files[0])} style={{display:"none"}} type="file" id="file" />
          <label className='file' htmlFor="file">Upload Image</label>

          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>

          <div className="cat">
            <input onChange={(e) => setCat(e.target.value)} checked={cat === "art"} type="radio" name='cat' value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>

          <div className="cat">
            <input onChange={(e) => setCat(e.target.value)} checked={cat === "science"} type="radio" name='cat' value="science" id="science" />
            <label htmlFor="science">Science</label>
          </div>

          <div className="cat">
            <input onChange={(e) => setCat(e.target.value)} checked={cat === "technology"} type="radio" name='cat' value="technology" id="technology" />
            <label htmlFor="technology">Technology</label>
          </div>

          <div className="cat">
            <input onChange={(e) => setCat(e.target.value)} checked={cat === "cinema"} type="radio" name='cat' value="cinema" id="cinema" />
            <label htmlFor="cinema">Cinema</label>
          </div>

          <div className="cat">
            <input onChange={(e) => setCat(e.target.value)} checked={cat === "design"} type="radio" name='cat' value="design" id="design" />
            <label htmlFor="design">Design</label>
          </div>

          <div className="cat">
            <input onChange={(e) => setCat(e.target.value)} checked={cat === "food"} type="radio" name='cat' value="food" id="food" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write