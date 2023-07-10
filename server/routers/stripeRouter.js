import express, { application } from "express"
import dotenv from "dotenv"
import Stripe from "stripe"

dotenv.config()
const stripeRouter = express.Router()
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)


stripeRouter.post("/payment", async (req, res) => {
  let { amount, id, stripe_acc_id, fee } = req.body
  try {
    const payment = await stripe.paymentIntents.create(
      {
        amount,
        currency: "eur",
        payment_method: id,
        confirm: true,
        application_fee_amount: amount * (fee / 100),
      },
      {
        stripeAccount: stripe_acc_id,
      }
    )
    console.log("Payment", payment)
    res.json({
      message: "Payment successful",
      success: true,
    })
  } catch (error) {
    console.log("Error", error)
    res.json({
      message: "Payment failed",
      success: false,
    })
  }
})

export default stripeRouter
