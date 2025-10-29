import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Cards from "../components/sections/Cards";
import CTA from "../components/sections/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="bg-indigo-200">
        <Features />
      </div>
      <Cards />
      <CTA />
    </>
  );
};

export default Home;
