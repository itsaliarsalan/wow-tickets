import express from "express"
import expressAsyncHandler from "express-async-handler"
import data from "../data.js"
import Event from "../models/eventModal.js"
import { isAuth } from "../utils.js"

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

// Event Create Route
eventRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const event = new Event({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      cover: req.body.cover,
      thumbnail: req.body.thumbnail,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      startTime: req.body.startTime,
      lastEntry: req.body.lastEntry,
      endTime: req.body.endTime,
      restrictions: req.body.restrictions,
      user: req.body.userId,
      venue: req.body.venueId,
      eventStatus: req.body.eventStatus,
    })
    const createdEvent = await event.save()
    res.send({ message: "Event Created", event: createdEvent })
  })
)

eventRouter.delete(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id)
    if (event) {
      const deletedEvent = await event.deleteOne()
      res.send({ message: "Event Deleted", event: deletedEvent })
    } else {
      res.status(404).send({ message: "Venue Not Found" })
    }
  })
)

export default eventRouter
