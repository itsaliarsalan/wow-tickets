import express from "express"
import data from "../data.js"
import { isAuth } from "../utils.js"
import Ticket from "../models/ticketModal.js"
import expressAsyncHandler from "express-async-handler"

const ticketRouter = express.Router()

ticketRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const tickets = await Ticket.find({})
    res.send(tickets)
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

// Ticket Create Route
ticketRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const ticket = new Ticket({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      allocation: req.body.allocation,
      user: req.body.userId,
      event: req.body.eventId,
      ticketStatus: req.body.ticketStatus,
    })
    const createdTicket = await ticket.save()
    res.send({ message: "Ticket Created", ticket: createdTicket })
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
