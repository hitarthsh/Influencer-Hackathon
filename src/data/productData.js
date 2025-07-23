import peachPic from "../assets/images/peach_pic.webp";
import picklePic from "../assets/images/pickle_pic.webp";
import litPic from "../assets/images/LIT_pic.webp";
import plPic from "../assets/images/PL_pic.webp";
import peachPour from "../assets/images/Photo-15-PeachPouring_5a714ff2-f33e-40b5-b7cb-6bfee5b04e7c.webp";
import picklePour from "../assets/images/Photo-14-PicklePour.webp";
import pinkLemonadePour from "../assets/images/Photo-12-PinkLemonadePour.webp";
import lemonIcedTeaPour from "../assets/images/Photo-13-LemonIcedTeaPour_d077ebf7-a8a3-4688-a165-4ef7e8a1f3bd.webp";
import mobileUpdated from "../assets/images/MobileUpdatedV3.webp";

export const productData = [
  {
    id: "peach",
    name: "Peach Fizz",
    description:
      "Juicy, sweet, and perfectly bubbly. Tastes like a summer day in a can.",
    image: peachPic,
    price: "$20 (4-pack)",
  },
  {
    id: "pickle",
    name: "Pickle Splash",
    description:
      "A tangy, refreshing twist with a hint of dill. Perfect for adventurous palates!",
    image: picklePic,
    price: "$18 (4-pack)",
  },
  {
    id: "lemon-iced-tea",
    name: "Lemon Iced Tea",
    description:
      "Classic iced tea flavor with a zesty lemon kick. Cool and invigorating.",
    image: lemonIcedTeaPour,
    price: "$19 (4-pack)",
  },
  {
    id: "pink-lemonade",
    name: "Pink Lemonade",
    description:
      "Sweet, tart, and oh-so-refreshing. A nostalgic favorite for all ages.",
    image: pinkLemonadePour,
    price: "$19 (4-pack)",
  },
  {
    id: "lit-special",
    name: "LIT Special Edition",
    description:
      "Limited edition flavor with a bold, unique taste. Try it before it's gone!",
    image: litPic,
    price: "$22 (4-pack)",
  },
  {
    id: "pl-classic",
    name: "PL Classic",
    description: "A timeless classic with a perfectly balanced flavor profile.",
    image: plPic,
    price: "$20 (4-pack)",
  },
  {
    id: "peach-pour",
    name: "Peach Pour",
    description: "A luscious pour of peachy goodness, sparkling and sweet.",
    image: peachPour,
    price: "$21 (4-pack)",
  },
  {
    id: "pickle-pour",
    name: "Pickle Pour",
    description:
      "A bold pour for pickle lovers, with a crisp and tangy finish.",
    image: picklePour,
    price: "$21 (4-pack)",
  },
  {
    id: "mobile-updated",
    name: "Mobile Updated",
    description: "A modern twist on a classic, with a fresh and vibrant taste.",
    image: mobileUpdated,
    price: "$20 (4-pack)",
  },
];

export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productData);
    }, 1000);
  });
};
