import express from "express"
import cors from "cors"
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"

const PORT = process.env.PORT || 3333

const app = express()
app.use(express.json()) 
app.use(cors())

app.use("/api/posts", postRoutes)   // if we go to this endpoint we'll go to the postRoutes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)


app.listen(PORT, () => {
    console.log(`Listening on the port: ${PORT}`)
})