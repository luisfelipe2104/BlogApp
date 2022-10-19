import express from "express"
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/postsController.js"

const router = express.Router()

router.get("/get-posts", getPosts)
router.get("/get-post/:id", getPost)
router.post("/add-post", addPost)
router.delete("/delete-post/:id", deletePost)
router.put("/update-post/:id", updatePost)

export default router