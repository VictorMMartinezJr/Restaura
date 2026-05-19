import { motion } from "framer-motion";
import heroIMG from "../assets//hero/hero.jpeg";
import logo from "../assets/hero/logo.png";
import { useState } from "react";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

  return (
    <section className="relative flex h-screen items-center justify-center">
      {/* Background Video */}
      <motion.div 
        className="absolute inset-0 -z-20 h-full w-full overflow-hidden bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVideoLoaded ? 1 : 0 }} 
        transition={{ duration: 0.6 }}
      >
        <video
          src="https://res.cloudinary.com/dosqnvzhy/video/upload/v1779133379/hero_uwo0yz.mp4"
          className="h-full w-full object-cover pointer-events-none"
          muted
          autoPlay
          loop
          playsInline
          onCanPlayThrough={() => setIsVideoLoaded(true)}
          poster={heroIMG}
        ></video>
      </motion.div>
      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent from-70% to-black"></div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative z-20 flex h-screen flex-col justify-end pb-20"
      >
        <img src={logo} alt="Restaura Logo" className="w-full p-4" />
        <p className="p-4 text-lg tracking-tighter text-white">Paris</p>
      </motion.div>
    </section>
  );
};

export default Hero;
