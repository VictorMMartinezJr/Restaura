import dish1 from "../assets/dishes/dish1.jpeg";
import dish2 from "../assets/dishes/dish2.jpeg";
import dish3 from "../assets/dishes/dish3.jpeg";
import dish4 from "../assets/dishes/dish4.jpeg";
import dish5 from "../assets/dishes/dish5.jpeg";

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

export const DISHES = [
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
];
