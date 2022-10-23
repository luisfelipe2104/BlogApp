import db from "../db.js"
import jwt from "jsonwebtoken"

// gets all posts
export const getPosts = (req, res) => {
    // gets the params and select * from the posts's category
    const q = req.query.cat 
    ? "SELECT * FROM posts WHERE cat=?" 
    : "SELECT * FROM posts"
    
    const values = [req.query.cat]

    db.query(q, values, (err, data) => {
        if (err) res.status(500).send(err)

        return res.status(200).json(data)
    })
}

// gets an especific post
export const getPost = (req, res) => {
    const q = "SELECT `username`, `title`, p.id, `descri`, `cat`, p.img, u.img AS userImg, `date` FROM users u JOIN posts p ON u.id = p.userId WHERE p.id = ?"
    const id = [req.params.id]
    
    db.query(q, id, (err, data) => {
        if (err) res.status(500).json(err)

        return res.status(200).json(data[0])
    })
}

// adds posts
export const addPost = (req, res) => {
    const token = req.cookies.access_token  // gets the cookie
    if(!token) return res.status(401).json("Not authenticated!")

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!")

        const q = "INSERT INTO posts(`title`, `descri`, `img`, `cat`, `userId`) VALUES (?)"

        const values = [req.body.title, req.body.descri, req.body.img, req.body.cat, userInfo.id]

        console.log(values)
        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err)
            return res.status(200).json("Post has been created!")
        })
    })
}

// deletes posts
export const deletePost = (req, res) => {
    const token = req.cookies.access_token  // gets the cookie
    if(!token) return res.status(401).json("Not authenticated!")

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!")

        const postId = req.params.id 
        const q = "DELETE FROM posts WHERE id = ? AND userId = ?"

        db.query(q, [postId, userInfo.id], (err, data) => {
            if (err) return res.status(403).json("You can delete only your post!")

            return res.status(200).json("Post has been deleted!")
        })
    })
}

// updates posts
export const updatePost = (req, res) => {
    const token = req.cookies.access_token  // gets the cookie
    if(!token) return res.status(401).json("Not authenticated!")

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!")

        const postId = req.params.id
        const q = "UPDATE posts SET `title`=?, `descri`=?, `img`=?, `cat`=? WHERE `id` = ? AND `userId` = ?"
        console.log("updating...")
        const values = [req.body.title, req.body.descri, req.body.img, req.body.cat]

        console.log(...values, postId, userInfo.id)
        db.query(q, [...values, postId, userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err)
            return res.status(200).json("Post has been updated!")
        })
    })
}