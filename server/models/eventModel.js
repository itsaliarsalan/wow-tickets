import mongoose from "mongoose"

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    thumbnail: { type: String, required: true },
    cover: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    website: { type: String, required: true },
    socialLinks: [],
    price: { type: Number, required: true },
    status: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
)
const Event = mongoose.model("Event", eventSchema)

export default Event