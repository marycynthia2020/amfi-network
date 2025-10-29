import { useEffect, useMemo, useRef, useState } from "react";
import type { IconType } from "react-icons";
import { GiOilPump } from "react-icons/gi";
import {
  MdAgriculture,
  MdOutlineModelTraining,
  MdRealEstateAgent,
} from "react-icons/md";
import { SiMicrostrategy, SiVictronenergy } from "react-icons/si";

type Feature = {
  id: string;
  icon?: IconType;
  title: string;
  description: string;
};

// Generic, reusable slider that can render any item type
interface SliderProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  visibleCount?: number; // fallback visible count
  // Responsive visible counts
  breakpoints?: {
    base?: number; // <640px
    sm?: number; // >=640px
    md?: number; // >=768px
    lg?: number; // >=1024px
    xl?: number; // >=1280px
  };
  slideBy?: number; // how many items to move per navigation
  loop?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number; // ms
  pauseOnHover?: boolean;
  className?: string;
}

function Slider<T>({
  items,
  renderItem,
  visibleCount = 4,
  breakpoints,
  slideBy = 1,
  loop = false,
  autoplay = false,
  autoplayInterval = 4000,
  pauseOnHover = true,
  className,
}: SliderProps<T>) {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [currentVisible, setCurrentVisible] = useState(visibleCount);
  const intervalRef = useRef<number | null>(null);

  // Responsive visible count based on breakpoints
  useEffect(() => {
    if (!breakpoints) {
      setCurrentVisible(visibleCount);
      return;
    }
    const bp = {
      base: breakpoints.base ?? 1,
      sm: breakpoints.sm ?? 2,
      md: breakpoints.md ?? 3,
      lg: breakpoints.lg ?? 4,
      xl: breakpoints.xl ?? 4,
    };

    const compute = () => {
      // Tailwind breakpoints: sm 640, md 768, lg 1024, xl 1280
      const w = window.innerWidth;
      if (w >= 1280) return setCurrentVisible(bp.xl);
      if (w >= 1024) return setCurrentVisible(bp.lg);
      if (w >= 768) return setCurrentVisible(bp.md);
      if (w >= 640) return setCurrentVisible(bp.sm);
      return setCurrentVisible(bp.base);
    };

    compute();
    const onResize = () => compute();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoints, visibleCount]);

  const maxIndex = Math.max(0, items.length - currentVisible);
  const pages = maxIndex + 1;

  // Clamp index when visible count or items change to avoid overshooting on resize
  useEffect(() => {
    setIndex((prev) => Math.max(0, Math.min(prev, maxIndex)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentVisible, items.length]);

  const goTo = (i: number) => {
    if (loop) {
      // Wrap around
      const size = maxIndex + 1;
      const wrapped = ((i % size) + size) % size;
      setIndex(wrapped);
    } else {
      setIndex(Math.max(0, Math.min(i, maxIndex)));
    }
  };

  const next = () => goTo(index + slideBy);
  const prev = () => goTo(index - slideBy);

  // Autoplay
  useEffect(() => {
    if (!autoplay || items.length <= currentVisible) return;
    if (pauseOnHover && isHovering) return;

    intervalRef.current = window.setInterval(() => {
      if (loop) {
        next();
      } else {
        // If reached end, snap back to start
        if (index >= maxIndex) {
          goTo(0);
        } else {
          next();
        }
      }
    }, autoplayInterval);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    autoplay,
    autoplayInterval,
    pauseOnHover,
    isHovering,
    index,
    currentVisible,
    items.length,
    loop,
    maxIndex,
  ]);

  const itemBasis = `${100 / currentVisible}%`;
  const translatePct = (index * 100) / currentVisible;

  const showNav = items.length > currentVisible;

  return (
    <div
      className={"relative w-full " + (className ?? "")}
      aria-roledescription="carousel"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
      {/* Viewport */}
      <div className="overflow-hidden w-full px-3 py-10">
        {/* Track */}
        <ul
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${translatePct}%)` }}
          aria-live="polite">
          {items.map((item, i) => (
            <li
              key={i as number}
              className="shrink-0 box-border px-3"
              style={{ flexBasis: itemBasis }}
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${items.length}`}>
              {renderItem(item, i)}
            </li>
          ))}
        </ul>
      </div>

      {/* Controls */}
      {showNav && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute -left-3 top-1/2 -translate-y-1/2 rounded-full border border-deep-blue bg-indigo-200 text-deep-blue hover:bg-deep-blue hover:text-white transition-colors w-10 h-10 grid place-items-center shadow">
            <span className="sr-only">Previous</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute -right-3 top-1/2 -translate-y-1/2 rounded-full border border-deep-blue bg-indigo-200 text-deep-blue hover:bg-deep-blue hover:text-white transition-colors w-10 h-10 grid place-items-center shadow">
            <span className="sr-only">Next</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {showNav && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: pages }).map((_, p) => (
            <button
              key={p}
              type="button"
              onClick={() => goTo(p)}
              aria-label={`Go to slide set ${p + 1}`}
              className={
                "h-2.5 w-2.5 rounded-full transition-colors " +
                (p === index
                  ? "bg-deep-blue"
                  : "bg-nav-grey hover:bg-deep-blue/60")
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Feature card UI
const FeatureCard = ({ title, description, icon }: Feature) => {
  const Icon = icon;
  return (
    <article className="group h-full rounded-xl p-5 transition-all duration-400 ease-out hover:shadow-sm flex items-center flex-col hover:scale-110 shadow-amber-500 hover:bg-linear-to-br from-indigo-50">
      <div className="mb-3 h-10 w-10 rounded-lg bg-orange/80 grid place-items-center text-deep-blue font-bold">
        {/* Placeholder icon */}
        <span>{Icon ? <Icon /> : null}</span>
      </div>
      <h3 className="text-lg text-center font-semibold mb-2 bg-clip-text text-deep-blue bg-linear-to-r  from-orange to-deep-blue group-hover:text-transparent transition-colors duration-400 ease-out">
        {title}
      </h3>
      <p className="text-sm text-gray-600  leading-relaxed text-center">
        {description}
      </p>
    </article>
  );
};

const Features = () => {
  const items: Feature[] = useMemo(
    () => [
      {
        id: "f1",
        icon: MdRealEstateAgent,
        title: "Real Estate Development & Regeneration",
        description:
          "Delivering modern infrastructure through private-sector partnerships — faster and more efficiently than traditional public projects.",
      },
      {
        id: "f2",
        icon: MdAgriculture,
        title: "Agribusiness & Integrated Farming",
        description:
          "Driving food security across Africa through sustainable value chains and innovative farming models.",
      },
      {
        id: "f3",
        icon: GiOilPump,
        title: "Oil & Gas Sector Expansion",
        description:
          "Empowering Africa’s energy future with strategic investments across upstream and downstream operations.",
      },
      {
        id: "f4",
        icon: SiMicrostrategy,
        title: "Corporate & Microfinance Strategy",
        description:
          "Providing project and trade financing solutions from $500K to $500M through strong technical finance partnerships.",
      },
      {
        id: "f5",
        icon: SiVictronenergy,
        title: "Renewable Energy Development",
        description:
          "Partnering with ROLT International to advance renewable energy, training, and infrastructure projects in Africa.",
      },
      {
        id: "f6",
        icon: MdOutlineModelTraining,
        title: "Summits, Conferences & Training",
        description:
          "Promoting human development and knowledge exchange through global economic summits and capacity-building programs.",
      },
    ],
    []
  );

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-24"
      id="features">
      <header className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-deep-blue">
          Powerful Features
        </h2>
        <p className="text-gray-600 mt-2">
          Explore and Discover your next Investment oppourtunity right here! On
          our platform.
        </p>
      </header>

      <Slider
        items={items}
        visibleCount={4}
        breakpoints={{ base: 1, sm: 2, lg: 3, xl: 4 }}
        slideBy={1}
        loop={true}
        autoplay
        autoplayInterval={4000}
        renderItem={(f) => <FeatureCard {...f} />}
      />
    </section>
  );
};

export default Features;
