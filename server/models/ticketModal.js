import mongoose from "mongoose"

const ticketSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String },
    allocation: { type: Number },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      default: null,
    },
    ticketStatus: { type: Boolean },
  },
  {
    timestamps: true,
  }
)
const Ticket = mongoose.model("Ticket", ticketSchema)

export default Ticket
