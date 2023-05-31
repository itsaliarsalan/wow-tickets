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
    restrictions: { type: Array, default: [] },
    socialLinks: { type: Array, default: [] },
    price: { type: Number, required: true },
    status: { type: Number, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
  },
  {
    timestamps: true,
  }
)
const Event = mongoose.model("Event", eventSchema)

export default Event
