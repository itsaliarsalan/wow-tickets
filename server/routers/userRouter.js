import express from "express"
import dotenv from "dotenv"
import expressAsyncHandler from "express-async-handler"
import bcrypt from "bcryptjs"
import data from "../data.js"
import User from "../models/userModal.js"
import Stripe from "stripe"
import { generateToken, isAuth } from "../utils.js"
import Seller from "../models/sellerInfoModal.js"

dotenv.config()
const userRouter = express.Router()
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users)
    res.send({ createdUsers })
  })
)

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          image: user.image,
          stripe_acc_id: user.stripe_acc_id,
          stripe_cus_id: user.stripe_cus_id,
          isAdmin: user.isAdmin,
          isSeller: user.isSeller,
          token: generateToken(user),
        })
        return
      }
    }
    res.status(401).send({ message: "Invalid email or password" })
  })
)

userRouter.post(
  "/register/seller",
  expressAsyncHandler(async (req, res) => {
    try {
      let account = null
      let accountLink = null

      if (req.body.isSeller) {
        account = await stripe.accounts.create({
          type: "standard",
          email: req.body.email,
        })
        accountLink = await stripe.accountLinks.create({
          account: account.id,
          refresh_url: process.env.SITE_URL + "/stripe-onboarding/fail",
          return_url: process.env.SITE_URL + "/dashboard",
          type: "account_onboarding",
        })
      }
      const customer = await stripe.customers.create({
        email: req.body.email,
      })

      const user = new User({
        name: req.body?.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        stripe_acc_id: account ? account.id : "",
        stripe_cus_id: customer.id,
        isSeller: req.body.isSeller,
      })
      const createdUser = await user.save()

      const seller = new Seller({
        name: req.body.items.name,
        address: req.body.items.address,
        company: req.body.items.company,
        tax: req.body.items.tax,
        email: req.body.items.email,
        user: createdUser.isSeller ? createdUser._id : null,
      })
      const createdSellerInfo = await seller.save()
      res.send({
        _id: createdUser._id,
        name: createdUser.username,
        email: createdUser.email,
        stripe_acc_id: createdUser.stripe_acc_id,
        stripe_cus_id: createdUser.stripe_cus_id,
        isAdmin: createdUser.isAdmin,
        isSeller: createdUser.isSeller,
        accountLink: accountLink?.url,
        sellerInfo: createdSellerInfo,
        token: generateToken(createdUser),
      })
    } catch (error) {
      if (error.response) {
        console.log("User error status: ", error.response.status)
        console.log("User error data: ", error.response.data)
      } else {
        console.log("User error message: ", error.message)
      }
    }
  })
)

userRouter.post(
  "/register/buyer",
  expressAsyncHandler(async (req, res) => {
    try {
      const customer = await stripe.customers.create({
        email: req.body.email,
      })
      const user = new User({
        name: req.body?.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        stripe_cus_id: customer.id,
      })
      const createdUser = await user.save()

      res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        stripe_acc_id: createdUser.stripe_acc_id,
        stripe_cus_id: createdUser.stripe_cus_id,
        isAdmin: createdUser.isAdmin,
        isSeller: createdUser.isSeller,
        token: generateToken(createdUser),
      })
    } catch (error) {
      if (error.response) {
        console.log("User error status: ", error.response.status)
        console.log("User error data: ", error.response.data)
      } else {
        console.log("User error message: ", error.message)
      }
    }
  })
)


userRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
      res.send(user)
    } else {
      res.status(404).send({ message: "User Not Found" })
    }
  })
)
userRouter.put(
  "/profile",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8)
      }
      const updatedUser = await user.save()
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        image: updatedUser.image,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      })
    }
  })
)
export default userRouter
