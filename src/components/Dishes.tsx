import { DISHES } from "../constants";
import DishCard from "./DishCard";
import {motion} from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Dishes = () => {
  return (
    <section className="container mx-auto py-16" id="dishes">
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Dishes
      </h2>
      <motion.div 
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
      className="grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-5">
        {DISHES.map((dish, index) => (
          <motion.div variants={itemVariants} key={index} className="flex flex-col items-center">
            <DishCard key={index} dish={dish} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Dishes;
