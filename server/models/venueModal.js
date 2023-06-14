import mongoose from "mongoose"

const venueSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    capacity: { type: Number },
    contact: { type: String },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postal: { type: String, required: true },
    country: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)
const Venue = mongoose.model("Venue", venueSchema)

export default Venue
