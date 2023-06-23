import mongoose from "mongoose"

const sellerSchema = new mongoose.Schema(
  {
    name: { type: String },
    address: { type: String },
    company: { type: String },
    tax: { type: String },
    email: { type: String },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  }
)
const Seller = mongoose.model("Seller", sellerSchema)

export default Seller
