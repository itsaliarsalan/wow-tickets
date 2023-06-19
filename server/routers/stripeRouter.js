import express, { application } from "express"
import dotenv from "dotenv"
import Stripe from "stripe"

dotenv.config()
const stripeRouter = express.Router()
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

stripeRouter.post("/onboard", async (req, res) => {
  const accountLink = await stripe.accountLinks.create({
    account: req.body.stripe_acc_id,
    refresh_url: "http://localhost:3000/dashboard/payments/fail",
    return_url: "http://localhost:3000/dashboard/payments/success",
    type: "account_onboarding",
  })
  console.log(accountLink.url)
  res.send(accountLink.url)
})

stripeRouter.post("/charge", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: "http://localhost:3000/dashboard/payments/success",
    line_items: [
      {
        price: "price_1NJc7pB9Mcrw68O0zarrgO7J",
        quantity: req.body.qty,
      },
    ],
    currency: "eur",
    payment_intent_data: {
      application_fee_amount: 50,
      transfer_data: {
        destination: "acct_1NJ9ZiB31HS35hY4",
      },
    },

    mode: "payment",
  })
  res.send(session.url)
})
export default stripeRouter
