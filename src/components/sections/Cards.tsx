import { motion } from "motion/react";
import { GiOilPump } from "react-icons/gi";
import {
  MdAgriculture,
  MdOutlineModelTraining,
  MdRealEstateAgent,
} from "react-icons/md";
import { SiMicrostrategy, SiVictronenergy } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";

const items = [
  {
    id: 1,
    icon: SiMicrostrategy,
    title: "OUR CORPORATE, MICRO FINANCE AND MANAGEMENT STRATEGY ",
    desc: "AMFI NETWORK Limited is a firm specialising in Corporate, Project and Trade financing at all levels from $500,000 to over $500million through her Technical Finance Partners.",
  },
  {
    id: 2,
    icon: SiVictronenergy,
    title: "OUR RENEWABLE ENERGY STRATEGY",
    desc: "Amfi Network Limited in collaboration with its Technical and Financial Partners, ROLT INTERNATIONAL initiate and create partnerships in the electricity, development, training and commodity sectors in Africa.",
  },
  {
    id: 3,
    icon: MdOutlineModelTraining,
    title: "ECONOMIC SUMMITS, CONFERENCES, WORKSHOPS AND TRAINING STRATEGY",
    desc: "At the 2000 Millennium Summit, 189 Member States of the United Nations endorsed theMillennium Development Goals (MDGs) as a framework to fight poverty and to accelerate Human  Development.",
  },
  {
    id: 4,
    icon: MdRealEstateAgent,
    title: "REAL ESTATE DEVELOPMENT, REGENERATION & CONSTRUCTION",
    desc: "A private infrastructure industry is emerging with a simple message to the public agencies that have traditionally dominated the industry: allow us to provide a complete package of development services and we will deliver the facilities needed in less time and at little or no cost to the treasury. The pitch is compelling.",
  },
  {
    id: 5,
    icon: MdAgriculture,
    title: "OUR AGRIBUSINESS VALUE CHAIN AND INTEGRATED FARMING MODEL",
    desc: "Food Insecurity in Africa and Nigeria: Africa as a whole cannot currently feed itself; its share of world trade has halved in a generation",
  },
  {
    id: 6,
    icon: GiOilPump,
    title: "OIL AND GAS SECTOR",
    desc: "As a company we are simple but extremely ambitious. We are ambitiously looking at joining the ranks of indigenous independent Upstream and Downstream production oil companies in Nigeria and Africa with a vision to power Africa’s emerging and growing oil and gas sector. To achieve this, we are implementing ambitious investment partnership programmes across the entire petroleum value chain,",
  },
];

const Cards = () => {
  return (
    <section className="w-full px-5 py-20  bg-gray-100 ">
      <div className=" max-w-[1440px] mx-auto" id="cards">
        <header className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-blue">
            Our Core Services
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Our core solutions an embodiement of out vision.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => {
            const delay = idx * 0.1 + 0.05;
            return (
              <motion.article
                key={it.id}
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.96,
                  rotateX: -8,
                  transformPerspective: 600,
                  filter: "blur(6px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
                className="rounded-xl border border-gray-200 p-5 shadow-sm bg-white flex flex-col gap-3 justify-between hover:scale-105 transition-all duration-400 ease-out hover:shadow-amber-500"
              >
                <div className="size-12">
                  <it.icon className="size-12 text-orange" />
                </div>
                <h3 className="text-lg font-semibold text-deep-blue">
                  {it.title}
                </h3>
                <p className="text-base text-gray-600">{it.desc}</p>
                <div className="group text-sm flex items-center gap-1 cursor-pointer">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-deep-blue to-orange">
                    learn more
                  </span>
                  <FaArrowRightLong className="-rotate-45 group-hover:rotate-0 group-hover:translate-x-2.5 transition-transform group-hover:text-orange " />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cards;
