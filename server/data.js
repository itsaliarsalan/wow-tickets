import bcrypt from "bcryptjs"

const data = {
  users: [
    {
      name: "Arsalan Ali",
      email: "aliarsalan.dev@gmail.com",
      image: "/images/avatar/ali.png",
      password: bcrypt.hashSync("1234", 8),
      stripe_acc_id: "",
      isAdmin: true,
      isSeller: false,
    },
  ],
}

export default data
