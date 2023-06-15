import express from "express"
import { link } from "fs"
import Stripe from "stripe"

const stripeRouter = express.Router()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Create Stripe Connect Account
stripeRouter.post("/create", async (req, res) => {
  try {
    const account = await stripe.accounts.create({
      type: "standard",
      email: req.body.email,
    })
    res.send(account.id)
  } catch (error) {
    console.log(error)
  }
})

stripeRouter.post("/onboard", async (req, res) => {
  const accountLink = await stripe.accountLinks.create({
    account: req.body.stripe_acc_id,
    refresh_url: req.body.refresh_url,
    return_url: req.body.return_url,
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
