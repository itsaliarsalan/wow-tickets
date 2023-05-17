import bcrypt from "bcrypt"

const data = {
  users: [
    {
      name: "Arsalan Ali",
      email: "admin@wow-tickets.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Adam",
      email: "user@wow-tickets.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  events: [
    {
      name: "Worried About Henry Ibiza 2023",
      slug: "worried-about-henry",
      category: "art",
      thumbnail: "/images/event-thumbnail-dummy.jpg",
      cover: "/images/event-banner-dummy.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim lorem non quam pulvinar posuere eu id dolor. Praesent ullamcorper magna tincidunt fermentum bibendum. Vivamus faucibus, ante sed molestie hendrerit, ipsum leo faucibus ante, in tincidunt lectus arcu a augue. Donec sollicitudin imperdiet ultricies. Nunc augue massa, accumsan vel lectus id, iaculis interdum est. Proin fringilla eros consectetur scelerisque ullamcorper. Nunc nec orci ut tellus volutpat lobortis vitae eget est. Phasellus nec pretium metus.",
      location: "London",
      startDate: "22 May, 2023",
      endDate: "23 May, 2023",
      website: "www.example.com",
      socialLinks: [],
      price: "35",
      status: 1,
    },
    {
      name: "Event 2",
      slug: "event-2",
      category: "art",
      thumbnail: "/images/event-thumbnail-dummy.jpg",
      cover: "/images/event-banner-dummy.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim lorem non quam pulvinar posuere eu id dolor. Praesent ullamcorper magna tincidunt fermentum bibendum. Vivamus faucibus, ante sed molestie hendrerit, ipsum leo faucibus ante, in tincidunt lectus arcu a augue. Donec sollicitudin imperdiet ultricies. Nunc augue massa, accumsan vel lectus id, iaculis interdum est. Proin fringilla eros consectetur scelerisque ullamcorper. Nunc nec orci ut tellus volutpat lobortis vitae eget est. Phasellus nec pretium metus.",
      location: "London",
      startDate: "22 May, 2023",
      endDate: "23 May, 2023",
      website: "www.example.com",
      socialLinks: [],
      price: "35",
      status: 1,
    },
    {
      name: "Event 3",
      slug: "event-3",
      category: "art",
      thumbnail: "/images/event-thumbnail-dummy.jpg",
      cover: "/images/event-banner-dummy.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim lorem non quam pulvinar posuere eu id dolor. Praesent ullamcorper magna tincidunt fermentum bibendum. Vivamus faucibus, ante sed molestie hendrerit, ipsum leo faucibus ante, in tincidunt lectus arcu a augue. Donec sollicitudin imperdiet ultricies. Nunc augue massa, accumsan vel lectus id, iaculis interdum est. Proin fringilla eros consectetur scelerisque ullamcorper. Nunc nec orci ut tellus volutpat lobortis vitae eget est. Phasellus nec pretium metus.",
      location: "London",
      startDate: "22 May, 2023",
      endDate: "23 May, 2023",
      website: "www.example.com",
      socialLinks: [],
      price: "35",
      status: 1,
    },
    {
      name: "Event 4",
      slug: "event-4",
      category: "art",
      thumbnail: "/images/event-thumbnail-dummy.jpg",
      cover: "/images/event-banner-dummy.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim lorem non quam pulvinar posuere eu id dolor. Praesent ullamcorper magna tincidunt fermentum bibendum. Vivamus faucibus, ante sed molestie hendrerit, ipsum leo faucibus ante, in tincidunt lectus arcu a augue. Donec sollicitudin imperdiet ultricies. Nunc augue massa, accumsan vel lectus id, iaculis interdum est. Proin fringilla eros consectetur scelerisque ullamcorper. Nunc nec orci ut tellus volutpat lobortis vitae eget est. Phasellus nec pretium metus.",
      location: "London",
      startDate: "22 May, 2023",
      endDate: "23 May, 2023",
      website: "www.example.com",
      socialLinks: [],
      price: "35",
      status: 1,
    },
    {
      name: "Event 5",
      slug: "event-5",
      category: "art",
      thumbnail: "/images/event-thumbnail-dummy.jpg",
      cover: "/images/event-banner-dummy.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim lorem non quam pulvinar posuere eu id dolor. Praesent ullamcorper magna tincidunt fermentum bibendum. Vivamus faucibus, ante sed molestie hendrerit, ipsum leo faucibus ante, in tincidunt lectus arcu a augue. Donec sollicitudin imperdiet ultricies. Nunc augue massa, accumsan vel lectus id, iaculis interdum est. Proin fringilla eros consectetur scelerisque ullamcorper. Nunc nec orci ut tellus volutpat lobortis vitae eget est. Phasellus nec pretium metus.",
      location: "London",
      startDate: "22 May, 2023",
      endDate: "23 May, 2023",
      website: "www.example.com",
      socialLinks: [],
      price: "35",
      status: 1,
    },
  ],
}

export default data
