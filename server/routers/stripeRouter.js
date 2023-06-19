import express, { application } from "express"
import dotenv from "dotenv"
import Stripe from "stripe"

dotenv.config()
const stripeRouter = express.Router()
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

stripeRouter.post("/onboard", async (req, res) => {
  const accountLink = await stripe.accountLinks.create({
    account: req.body.stripe_acc_id,
    refresh_url: process.env.SITE_URL + "/onboarding/fail",
    return_url: process.env.SITE_URL + "/dashboard/payments",
    type: "account_onboarding",
  })
  console.log(accountLink.url)
  res.send(accountLink.url)
})

stripeRouter.post("/charge", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: process.env.SITE_URL + "/order/success",
    line_items: [
      {
        price: req.body.stripe_pri_id,
        quantity: req.body.qty,

      },
    ],
    currency: "eur",
    payment_intent_data: {
      application_fee_amount: Math.floor(req.body.price * 0.05),
      transfer_data: {
        destination: req.body.stripe_acc_id,
      },
    },

    mode: "payment",
  })
  res.send(session.url)
})
export default stripeRouter
