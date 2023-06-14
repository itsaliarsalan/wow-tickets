import mongoose from "mongoose"

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String },
    thumbnail: { type: String, required: true },
    cover: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    startTime: { type: String },
    lastEntry: { type: String },
    endTime: { type: String },
    restrictions: { type: Boolean, default: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    venue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Venue",
      default: null,
    },
    eventStatus: { type: Boolean },
  },
  {
    timestamps: true,
  }
)
const Event = mongoose.model("Event", eventSchema)

export default Event
