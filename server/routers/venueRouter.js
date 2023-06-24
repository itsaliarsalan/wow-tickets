import express from "express"
import expressAsyncHandler from "express-async-handler"
import data from "../data.js"
import Venue from "../models/venueModal.js"
import { isAuth } from "../utils.js"
const venueRouter = express.Router()

venueRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const user = req.query.seller || ""
    const sellerFilter = user ? { user } : {}
    const venues = await Venue.find({ ...sellerFilter })
    res.send(venues)
  })
)

venueRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Venue.remove({});
    const createdVenue = await Venue.insertMany(data.venues)
    res.send({ createdVenue })
  })
)

venueRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const venue = new Venue({
      name: req.body.name,
      capacity: req.body.capacity,
      contact: req.body.contact,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      postal: req.body.postal,
      country: req.body.country,
      user: req.body.userId,
    })
    const createdVenue = await venue.save()
    res.send({ message: "Venue Added", venue: createdVenue })
  })
)

venueRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const Venue = await Venue.findById(req.params.id)
    if (Venue) {
      res.send(Venue)
    } else {
      res.status(404).send({ message: "Venue Not Found" })
    }
  })
)

venueRouter.put(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const venueId = req.params.id
    const venue = await Venue.findById(venueId)
    if (venue) {
      venue.name = req.body.name
      venue.capacity = req.body.capacity
      venue.contact = req.body.contact
      venue.address = req.body.address
      venue.city = req.body.city
      venue.state = req.body.state
      venue.postal = req.body.postal
      venue.country = req.body.country
      const updatedVenue = await venue.save()
      res.send({ message: "Venue Updated", venue: updatedVenue })
    } else {
      res.status(404).send({ message: "Venue Not Found" })
    }
  })
)

venueRouter.delete(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const venue = await Venue.findById(req.params.id)
    if (venue) {
      const deletedVenue = await venue.deleteOne()
      res.send({ message: "Venue Deleted", venue: deletedVenue })
    } else {
      res.status(404).send({ message: "Venue Not Found" })
    }
  })
)

export default venueRouter
