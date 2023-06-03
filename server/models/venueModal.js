import mongoose from "mongoose"

const venueSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    long: { type: String },
    lang: { type: String },
  },
  {
    timestamps: true,
  }
)
const Venue = mongoose.model("Venue", venueSchema)

export default Venue
