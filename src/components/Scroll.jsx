"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
      <HorizontalScrollCarousel />
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [1, 0], ["10%", "-95%"]);

  return (
    <section ref={targetRef} className="relatice pt-12 h-auto bg-first">
      <div className="sticky top-0 flex h-96 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12">
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
      className="group relative rounded-3xl h-[350px] w-[350px] overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "https://picsum.photos/200/300",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://picsum.photos/300/300",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://picsum.photos/400/300",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://picsum.photos/500/500",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://picsum.photos/200/200",
    title: "Title 5",
    id: 5,
  },
   {
    url: "https://picsum.photos/200/500",
    title: "Title 6",
    id: 6,
  },
   {
    url: "https://picsum.photos/200/500",
    title: "Title 6",
    id: 7,
  },
];
