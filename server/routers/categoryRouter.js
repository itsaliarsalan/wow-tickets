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
      name: "Category Name " + Date.now(),
      description: "lorem ipsum is a dummy text use as a placeholder.",
      image: "http://via.placeholder.com/150x150",
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

categoryRouter.put(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const categoryId = req.params.id
    const category = await Category.findById(categoryId)
    if (category) {
      category.name = req.body.name
      category.image = req.body.image
      category.description = req.body.description
      const updatedCategory = await category.save()
      res.send({ message: "Category Updated", category: updatedCategory })
    } else {
      res.status(404).send({ message: "Category Not Found" })
    }
  })
)

categoryRouter.delete(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id)
    if (category) {
      const deletedCategory = await category.remove()
      res.send({ message: "Category Deleted", category: deletedCategory })
    } else {
      res.status(404).send({ message: "Category Not Found" })
    }
  })
)

export default categoryRouter
