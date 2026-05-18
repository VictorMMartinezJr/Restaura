import dish1 from "../assets/dishes/dish1.jpeg";
import dish2 from "../assets/dishes/dish2.jpeg";
import dish3 from "../assets/dishes/dish3.jpeg";
import dish4 from "../assets/dishes/dish4.jpeg";
import dish5 from "../assets/dishes/dish5.jpeg";
import dish6 from "../assets/dishes/dish6.jpeg";
import dish7 from "../assets/dishes/dish7.jpeg";
import dish8 from "../assets/dishes/dish8.jpeg";
import dish9 from "../assets/dishes/dish9.jpeg";
import dish10 from "../assets/dishes/dish10.jpeg";

// Navigation links
interface Link {
  text: string;
  href: string;
}
export const LINKS: Link[] = [
  { text: "Dishes", href: "#dishes" },
  { text: "About", href: "#about" },
  { text: "Mission", href: "#mission" },
  { text: "Expertise", href: "#expertise" },
  { text: "Review", href: "#review" },
  { text: "Contact", href: "#contact" },
];

// Dishes data
interface Dish {
  image: string;
  title: string;
  description: string;
}

export const DISHES: Dish[] = [
  {
    image: dish1,
    title: "Spaghetti Carbonara",
    description: "Creamy pasta with bacon and cheese",
  },
  {
    image: dish2,
    title: "Chicken Tikka Masala",
    description: "Indian curry with tender chicken in spicy sauce",
  },
  {
    image: dish3,
    title: "Caprese Salad",
    description: "Fresh tomatoes, mozzarella, and basil with balsamic glaze",
  },
  {
    image: dish4,
    title: "Sushi Roll",
    description: "Assorted seafood and vegetables wrapped in seaweed and rice",
  },
  {
    image: dish5,
    title: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with a gooey center",
  },
  {
    image: dish6,
    title: "Greek Salad",
    description: "Crisp lettuce, olives, feta cheese, and tangy dressing",
  },
  {
    image: dish7,
    title: "Pad Thai",
    description: "Stir-fried rice noodles with shrimp, tofu, and peanuts",
  },
  {
    image: dish8,
    title: "Peking Duck",
    description: "Crispy duck with pancakes, cucumber, and hoisin sauce",
  },
  {
    image: dish9,
    title: "Beef Wellington",
    description: "Tender beef filet wrapped in pastry with mushrooms and herbs",
  },
  {
    image: dish10,
    title: "Tiramisu",
    description:
      "Italian dessert with layers of coffee-soaked biscuits and mascarpone",
  },
];

// About us content
interface AboutContent {
  header: string;
  content: string;
}
export const ABOUT: AboutContent = {
  header: "We love cooking!",
  content:
    "At Restaura, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Restaura—where every meal is a masterpiece.",
};

// Mission statement
interface MissionContent {
  statement: string;
}
export const MISSION: MissionContent = {
  statement:
    "At our restaurant, our mission is to create delicious and memorable dining experiences.",
};
