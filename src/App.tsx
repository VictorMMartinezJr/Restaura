import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Dishes from "./components/Dishes";
import Enterprise from "./components/Enterprise";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Review from "./components/Review";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="bg-black">
        <Dishes />
        <About />
        <Mission />
        <Enterprise />
        <Review />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
