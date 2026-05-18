import heroIMG from "../assets//hero/hero.jpeg";
import logo from "../assets/hero/logo.png";

const Hero = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
        {/* Background Video */}
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src="https://res.cloudinary.com/dosqnvzhy/video/upload/v1779133379/hero_uwo0yz.mp4"
          className="h-full w-full object-cover pointer-events-none"
          muted
          autoPlay
          loop
          playsInline
          poster={heroIMG}
        ></video>
      </div>
         {/* Overlay */}
         <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent from-70% to-black"></div>

         {/* Logo */}
         <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
            <img src={logo} alt="Restaura Logo" className="w-full p-4" />
            <p className="p-4 text-lg tracking-tighter text-white">Paris</p>
         </div>
    </section>
  );
};

export default Hero;
