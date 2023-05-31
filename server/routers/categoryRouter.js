import express from "express"
import expressAsyncHandler from "express-async-handler"
import data from "../data.js"
import Category from "../models/categoryModal.js"
import { isAuth } from "../utils.js"
const categoryRouter = express.Router()

categoryRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const events = await Category.find({})
    res.send(events)
  })
)

categoryRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Category.remove({});
    const createdCategory = await Category.insertMany(data.categories)
    res.send({ createdCategory })
  })
)

categoryRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const category = new Category({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
    })
    const createdCategory = await category.save()
    res.send({ message: "Category Added", category: createdCategory })
  })
)

categoryRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const Category = await Category.findById(req.params.id)
    if (Category) {
      res.send(Category)
    } else {
      res.status(404).send({ message: "Category Not Found" })
    }
  })
)

export default categoryRouter
