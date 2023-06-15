import express from "express"
import dotenv from "dotenv"
import Stripe from "stripe"

dotenv.config()
const stripeRouter = express.Router()
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)



stripeRouter.post("/onboard", async (req, res) => {
  const accountLink = await stripe.accountLinks.create({
    account: req.body.stripe_acc_id,
    refresh_url: "http://localhost:3000",
    return_url: "http://localhost:3000",
    type: "account_onboarding",
  })
  res.send(accountLink.url)
})

// Check if seller completes the oboarding properly
// stripeRouter.get('/:id', async(req, res)=>{
//     details_submitted
// })
// Get Account

export default stripeRouter
