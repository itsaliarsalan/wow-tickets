import dayjs from "dayjs"
import express from "express"
import data from "../data.js"
import mongoose from "mongoose"
import { isAuth } from "../utils.js"
import Event from "../models/eventModal.js"
import expressAsyncHandler from "express-async-handler"

const eventRouter = express.Router()
eventRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const seller = req.query.seller || ""
    const sellerFilter = seller ? { seller } : {}
    const events = await Event.find({ ...sellerFilter }).populate({
      path: "venue",
      select: ["name", "address", "city", "state", "country"],
    })
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
      .populate({
        path: "venue",
        select: ["name", "address", "city", "state", "country"],
      })
      .populate({
        path: "user",
        select: ["name", "email", "image"],
      })

    if (event) {
      await res.send(event)
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
      startDate: dayjs(req.body.startDate).format("DD-MM-YYYY"),
      endDate: dayjs(req.body.endDate).format("DD-MM-YYYY"),
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
