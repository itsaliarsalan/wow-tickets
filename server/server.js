import express from "express"
import data from "./data.js"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to DB.")
  })
  .catch((err) => {
    console.log(err.message)
  })

const app = express()

app.get("/api/events", (req, res) => {
  res.send(data.events)
})

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`)
})
