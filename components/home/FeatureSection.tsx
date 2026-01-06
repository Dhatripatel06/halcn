"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Supplying",
    description: "Once you have your Georgia Lottery COAM license, you can browse and choose the best machines for your business...",
  },
  {
    title: "License Approval",
    description: "Getting your GA Lottery COAM Location Class B License is a hassle...",
  },
  {
    title: "Set-Up",
    description: "Once you've chosen your COAM, our team of technicians will carefully deliver your machine...",
  },
];

export default function FeatureSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within the tall container track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Card 1: Slides from right (100%) to center (0%) early in the scroll
  const x1 = useTransform(scrollYProgress, [0, 0.3], ["100%", "0%"]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.3], [10, -2]);

  // Card 2: Slides in as the first one finishes, with a slight overlap
  const x2 = useTransform(scrollYProgress, [0.3, 0.6], ["100%", "0%"]);
  const rotate2 = useTransform(scrollYProgress, [0.3, 0.6], [-10, 2]);

  // Card 3: Final card slides in during the last third of the scroll
  const x3 = useTransform(scrollYProgress, [0.6, 0.9], ["100%", "0%"]);
  const rotate3 = useTransform(scrollYProgress, [0.6, 0.9], [8, -3]);

  return (
    <div ref={containerRef} className="relative min-h-[200vh] w-full bg-black">
      {/* The sticky container keeps the content in view while you scroll through the 200vh track */}
      <section className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-10">
        
        {/* Title Content Area */}
        <div className="mb-12 text-center text-white">
          <h2 className="text-4xl font-bold">Our Services</h2>
        </div>

        {/* Cards Sliding Track */}
        <div className="relative flex w-full max-w-6xl items-center justify-center gap-4">
          {features.map((feature, index) => {
            // Assign the unique transform to each card based on its index
            const xVal = index === 0 ? x1 : index === 1 ? x2 : x3;
            const rotateVal = index === 0 ? rotate1 : index === 1 ? rotate2 : rotate3;

            return (
              <motion.div
                key={index}
                style={{ x: xVal, rotate: rotateVal }}
                className="flex h-[450px] w-[350px] flex-col justify-end rounded-3xl border border-red-600 bg-[#1A1A1A] p-8 text-white shadow-2xl"
              >
                <h3 className="mb-4 text-2xl font-bold text-red-500">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}