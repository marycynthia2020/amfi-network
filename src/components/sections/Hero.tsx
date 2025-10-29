import Button from "../ui/Button"

const Hero = () => {
  return (
    <section className="w-full h-screen bg-[url('/hero.jpg')]  bg-no-repeat bg-cover  overflow-hidden" id="about">
       <div className="absolute inset-0 bg-linear-to-r from-black/80  to-transparent "></div>
      <div className="px-5 absolute max-w-[1440px] mx-auto  inset-0 flex items-center fade-in-up">
         <div className="w-full max-w-4xl flex flex-col gap-8 text-white mt-20 md:mt-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl  font-bold leading-tight">
            Rebuilding Nigeria and <span className="text-orange">Sub-Sahara Africa</span>
          </h1>
          <p className="text-xl md:text-2xl  leading-relaxed max-w-3xl ">
            Amfi Network is a multi-sector development company committed to Leading investments across real estate, agribusiness, energy, and finance to drive sustainable economic development across Africa.
          </p>
          <Button children="explore our setors" href="#features" />
        </div>
      </div>
    </section>
  )
}

export default Hero
