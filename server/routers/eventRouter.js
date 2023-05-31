import express from "express"
import expressAsyncHandler from "express-async-handler"
import data from "../data.js"
import Event from "../models/eventModal.js"

const eventRouter = express.Router()

eventRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const events = await Event.find({})
    res.send(events)
  })
)

eventRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Event.remove({});
    const createdEvents = await Event.insertMany(data.events)
    res.send({ createdEvents })
  })
)

eventRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id)
    if (event) {
      res.send(event)
    } else {
      res.status(404).send({ message: "Event Not Found" })
    }
  })
)

export default eventRouter
