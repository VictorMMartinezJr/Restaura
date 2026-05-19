import { REVIEW } from "../constants";
import xaviour from "../assets/review/xaviour.jpeg";
import customer1 from "../assets/review/customer1.jpeg";
import customer2 from "../assets/review/customer2.jpeg";
import customer3 from "../assets/review/customer3.jpeg";
import customer4 from "../assets/review/customer4.jpeg";
import { motion } from "framer-motion";

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

const Review = () => {
  return (
    <section id="review" className="container mx-auto mb-8 mt-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        {/* Main Review */}
        <motion.p
          variants={itemVariants}
          className="px-2 mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem]"
        >
          {REVIEW.content}
        </motion.p>

        {/* Reviewer Info */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          <img
            src={xaviour}
            alt={REVIEW.name}
            width={80}
            height={80}
            className="rounded-full border"
          />

          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Customer Images */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
        className="mt-20 grid grid-cols-2 justify-center gap-2 lg:grid-cols-4"
      >
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="flex justify-center items-center"
          >
            <img
              src={customer}
              alt={`Customer ${++index}`}
              className="h-75 w-50 rounded-br-3xl rounded-tl-3xl object-cover lg:w-75"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Review;
