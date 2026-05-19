import { MISSION } from "../constants";
import mission from "../assets/mission.jpeg";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="mission">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="mb-8 text-3xl lg:text-4xl">Our Mission</h2>

        {/* Video */}
        <div className="relative flex items-center justify-center">
          <video
            src="https://res.cloudinary.com/dosqnvzhy/video/upload/v1779148377/mission_rnfzst.mp4"
            className="w-full rounded-3xl pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
            poster={mission}
          ></video>

          {/* Overlay and text */}
          <div className="absolute h-full w-full rounded-3xl bg-black/40"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute max-w-lg tracking-tighter lg:text-3xl"
          >
            {MISSION.statement}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
