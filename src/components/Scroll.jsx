"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [1, 0], ["10%", "-45%"]);

  return (
    <section ref={targetRef} className="relatice h-auto bg-first">
      <div className="sticky top-0 flex   h-52  md:h-72  lg:h-80 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative rounded-xl h-[150px] w-[150px]  md:h-[200px] md:w-[200px]  lg::h-[300px] lg:w-[300px] overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "https://picsum.photos/200/300",
    id: 1,
  },
  {
    url: "https://picsum.photos/300/300",
    id: 2,
  },
  {
    url: "https://picsum.photos/400/300",
    id: 3,
  },
  {
    url: "https://picsum.photos/500/500",
    id: 4,
  },
  {
    url: "https://picsum.photos/200/200",
    id: 5,
  },
  {
    url: "https://picsum.photos/200/500",
    id: 6,
  },
  {
    url: "https://picsum.photos/200/500",
    id: 7,
  },
];
