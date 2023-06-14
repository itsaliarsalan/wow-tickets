import bcrypt from "bcryptjs"

const data = {
  users: [
    {
      name: "Arsalan Ali",
      email: "admin@wow-tickets.com",
      image: "/images/avatar/ali.png",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Adam",
      email: "user@wow-tickets.com",
      image: "/images/avatar/adam.png",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  events: [
    {
      name: "Demo Event",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim lorem non quam pulvinar posuere eu id dolor. Praesent ullamcorper magna tincidunt fermentum bibendum. Vivamus faucibus, ante sed molestie hendrerit, ipsum leo faucibus ante, in tincidunt lectus arcu a augue. Donec sollicitudin imperdiet ultricies. Nunc augue massa, accumsan vel lectus id, iaculis interdum est. Proin fringilla eros consectetur scelerisque ullamcorper. Nunc nec orci ut tellus volutpat lobortis vitae eget est. Phasellus nec pretium metus.",
      category: null,
      thumbnail: "/images/event-thumbnail-dummy.jpg",
      cover: "/images/event-banner-dummy.jpg",
      startDate: "22 May, 2023",
      endDate: "23 May, 2023",
      startTime: "",
      lastEntry: "",
      endTime: "",
      restrictions: false,
      user: "6477b93842c1e6842b96d9e7",
      venue: "6488d7a2e4e8d3d97377c9da",
      eventStatus: true,
    },
  ],

  venues: [
    {
      name: "ABC Hall",
      capacity: 5000,
      contact: "+44 5657 435676",
      address: "196 Poolstock Ln",
      city: "Wigan",
      state: "Greater Manchester",
      postal: "WN3 5HW",
      country: "United Kingdom",
    },
  ],
}

export default data
