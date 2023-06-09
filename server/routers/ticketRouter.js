import express from "express"
import dotenv from "dotenv"
import { isAuth } from "../utils.js"
import Stripe from "stripe"
import Ticket from "../models/ticketModal.js"
import expressAsyncHandler from "express-async-handler"

dotenv.config()
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)
const ticketRouter = express.Router()

ticketRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const user = req.query.seller || ""
    const sellerFilter = user ? { user } : {}
    try {
      const tickets = await Ticket.find({ ...sellerFilter }).populate({
        path: "user",
        select: ["name", "email", "stripe_acc_id"],
      })
      res.send(tickets)
    } catch (error) {
      console.log(error)
    }
  })
)

ticketRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const ticket = await Ticket.findById(req.params.id)
    if (ticket) {
      res.send(ticket)
    } else {
      res.status(404).send({ message: "Ticket Not Found" })
    }
  })
)

ticketRouter.get(
  "/event/:eventId",
  expressAsyncHandler(async (req, res) => {
    const ticket = await Ticket.find({ event: req.params.eventId }).populate({
      path: "user",
      select: ["stripe_acc_id"],
    })

    if (ticket) {
      res.send(ticket)
    } else {
      res.status(404).send({ message: "Ticket Not Found" })
    }
  })
)

// Ticket Create Route
ticketRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const product = await stripe.products.create({
        name: req.body.name,
        description: req.body.description,
      })

      const price = await stripe.prices.create({
        unit_amount: Math.floor(req.body.price) * 100,
        currency: "eur",
        product: product.id,
      })

      const ticket = new Ticket({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        allocation: req.body.allocation,
        user: req.body.userId,
        event: req.body.eventId,
        stripe_pro_id: product.id,
        stripe_pri_id: price.id,
        ticketStatus: req.body.ticketStatus,
      })
      const createdTicket = await ticket.save()
      res.send({ message: "Ticket Created", ticket: createdTicket })
    } catch (error) {
      if (error.response) {
        console.log("Ticket error status: ", error.response.status)
        console.log("Ticket error data: ", error.response.data)
      } else {
        console.log("Ticket error message: ", error)
      }
    }
  })
)

ticketRouter.delete(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const ticket = await Ticket.findById(req.params.id)

    if (ticket) {
      const deletedTicket = await ticket.deleteOne()
      res.send({ message: "Ticket Deleted", ticket: deletedTicket })
    } else {
      res.status(404).send({ message: "Ticket Not Found" })
    }
  })
)

export default ticketRouter
