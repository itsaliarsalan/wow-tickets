import Multer from "multer"
import express from "express"
import dotenv from "dotenv"
import cloudinary from "cloudinary"
const uploadRouter = express.Router()

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  })
  return res
}

const storage = new Multer.memoryStorage()
const upload = Multer({
  storage,
})

uploadRouter.post("/upload", upload.single("my_file"), async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64")
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64
    const cldRes = await handleUpload(dataURI)
    res.json(cldRes)
  } catch (error) {
    console.log(error)
    res.send({
      message: error.message,
    })
  }
})

export default uploadRouter
