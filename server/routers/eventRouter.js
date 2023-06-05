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
      thumbnail: req.body.thumbnail,
      cover: req.body.cover,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      website: req.body.website,
      restrictions: req.body.restrictions,
      socialLinks: req.body.socialLinks,
      price: req.body.price,
      user: req.body.userId,
      category: req.body.categoryId,
      venue: req.body.venueId,
      eventStatus: req.body.eventStatus,
    })
    const createdEvent = await event.save()
    res.send({ message: "Event Created", event: createdEvent })
  })
)

export default eventRouter
