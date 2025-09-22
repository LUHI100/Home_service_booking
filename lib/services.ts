export const services = [
  {
    id: 1,
    slug: "professional-plumbing",
    title: "Professional Plumbing",
    category: "Plumbing",
    price: 500,
    description:
      "Expert plumbing services for all your home needs. From leak repairs to pipe installations, our certified plumbers provide reliable solutions.",
    image: "/professional-plumbing.png",
  },
  {
    id: 2,
    slug: "professional-babysitting",
    title: "Professional Babysitting",
    category: "Babysitting",
    price: 300,
    description:
      "Trusted and experienced babysitters for your children. Background-checked caregivers with excellent references.",
    image: "/professional-babysitting.png",
  },
  {
    id: 3,
    slug: "home-cooking-service",
    title: "Home Cooking Service",
    category: "Cooking",
    price: 800,
    description:
      "Delicious home-cooked meals prepared by professional chefs. Customizable menus for all dietary preferences.",
    image: "/home-cooking-service.png",
  },
  {
    id: 4,
    slug: "deep-house-cleaning",
    title: "Deep House Cleaning",
    category: "House Cleaning",
    price: 1200,
    description:
      "Comprehensive house cleaning service including all rooms, bathrooms, kitchen, and common areas. Eco-friendly products used.",
    image: "/deep-house-cleaning.png",
  },
  {
    id: 5,
    slug: "laundry-dry-cleaning",
    title: "Laundry & Dry Cleaning",
    category: "Laundry",
    price: 200,
    description: "Complete laundry service including washing, drying, folding, and dry cleaning for delicate items.",
    image: "/laundry-dry-cleaning.png",
  },
  {
    id: 6,
    slug: "event-catering",
    title: "Event Catering",
    category: "Catering",
    price: 2000,
    description:
      "Professional catering services for all occasions. From intimate dinners to large celebrations, we've got you covered.",
    image: "/event-catering.png",
  },
]

export type Service = (typeof services)[0]
