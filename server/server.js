import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

import path from "path"
import uploadRouter from "./routers/uploadRouter.js"
import eventRouter from "./routers/eventRouter.js"
import categoryRouter from "./routers/categoryRouter.js"
import userRouter from "./routers/userRouter.js"
import venueRouter from "./routers/venueRouter.js"

dotenv.config()

const app = express()
// Below two lines converts form post data to json format in req body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to DB")
  })
  .catch((err) => {
    console.log(err.message)
  })

app.use("/api/uploads", uploadRouter)
app.use("/api/users", userRouter)
app.use("/api/events", eventRouter)
app.use("/api/categories", categoryRouter)
app.use("/api/venues", venueRouter)

const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, "/client/build")))

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/build/index.html"))
)
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

const port = process.env.PORT || 8001
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`)
})
