import mongoose from "mongoose"

const ticketSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number },
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
    stripe_pro_id: {
      type: String,
    },
    stripe_pri_id: {
      type: String,
    },

    ticketStatus: { type: Boolean },
  },
  {
    timestamps: true,
  }
)
const Ticket = mongoose.model("Ticket", ticketSchema)

export default Ticket
