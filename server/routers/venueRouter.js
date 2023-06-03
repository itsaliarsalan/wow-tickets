import express from "express"
import expressAsyncHandler from "express-async-handler"
import data from "../data.js"
import Venue from "../models/venueModal.js"
import { isAuth } from "../utils.js"
const venueRouter = express.Router()

venueRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const venues = await Venue.find({})
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
      image: req.body.image,
      streetAddress: req.body.streetAddress,
      city: req.body.city,
      state: req.body.state,
      postalCode: req.body.postalCode,
      country: req.body.country,
      long: req.body.long,
      lang: req.body.lang,
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
      venue.image = req.body.image
      venue.streetAddress = req.body.streetAddress
      venue.city = req.body.city
      venue.state = req.body.state
      venue.postalCode = req.body.postalCode
      venue.country = req.body.country
      venue.long = req.body.long
      venue.lang = req.body.lang
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
