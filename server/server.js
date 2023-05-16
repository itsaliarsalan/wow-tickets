const PORT = process.env.PORT ?? 8000
const express = require("express")
const { v4: uuidv4 } = require("uuid")
const cors = require("cors")
const app = express()
const pool = require("./db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

app.use(cors())
app.use(express.json())

// signup
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(password, salt)

  try {
    const signUp = await pool.query(
      `INSERT INTO users (username, email, hashed_password, privileged) VALUES($1, $2, $3, $4)`,
      [username, email, hashedPassword, 0]
    )

    const token = jwt.sign({ email }, "secret", { expiresIn: "1hr" })

    res.json({ email, token })
  } catch (err) {
    console.error(err)
    if (err) {
      res.json({ detail: err.detail })
    }
  }
})

// login
app.post("/login", async (req, res) => {
  const { email, password } = req.body
  try {
    const users = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ])

    if (!users.rows.length) return res.json({ detail: "User does not exist!" })

    const success = await bcrypt.compare(
      password,
      users.rows[0].hashed_password
    )
    const token = jwt.sign({ email }, "secret", { expiresIn: "1hr" })

    if (success) {
      res.json({ email: users.rows[0].email, token })
    } else {
      res.json({ detail: "Login failed" })
    }
  } catch (err) {
    console.error(err)
  }
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
