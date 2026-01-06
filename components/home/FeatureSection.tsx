"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Supplying",
    description: "Once you have your Georgia Lottery COAM license, you can browse and choose the best machines for your business...",
    color: "bg-[#0F0F0F]",
  },
  {
    title: "License Approval",
    description: "Getting your GA Lottery COAM Location Class B License is a hassle-free experience with our dedicated support team.",
    color: "bg-[#161616]",
  },
  {
    title: "Set-Up",
    description: "Once you've chosen your COAM, our team of technicians will carefully deliver and calibrate your machine for perfect sound.",
    color: "bg-red-600",
  },
];

export default function FeatureSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Offset ["start start", "end end"] is crucial for the sticky "hold" effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    // The total height determines how long the background "holds"
    <div ref={containerRef} className="relative h-[400vh] w-full bg-black">
      
      {/* Sticky wrapper keeps the background fixed while cards animate */}
      <section className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-6">
        
        {/* Background Decorative Text (Daydream Style) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <span className="text-[22vw] font-black uppercase italic text-white tracking-tighter">
            HALCN
          </span>
        </div>

        {/* Section Title */}
        <div className="absolute top-20 text-center z-50">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase text-white">Our Services</h2>
        </div>

        {/* Cards Container */}
        <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center">
          {features.map((feature, index) => {
            // Each card takes a specific slice of the scroll (0-0.3, 0.3-0.6, 0.6-0.9)
            const start = index * 0.28;
            const end = start + 0.25;

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const x = useTransform(scrollYProgress, [start, end], ["150%", "0%"]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const rotate = useTransform(scrollYProgress, [start, end], [25, 0]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, start + 0.05], [0, 1]);

            return (
              <motion.div
                key={index}
                style={{ 
                  x, 
                  rotate, 
                  opacity,
                  zIndex: index + 10,
                  // Staggered layout similar to the video
                  marginLeft: index === 0 ? "0px" : `${index * 60}px`,
                  marginTop: index === 0 ? "0px" : `${index * 30}px`
                }}
                className={`absolute w-[300px] md:w-[380px] h-[450px] flex flex-col justify-end rounded-[2.5rem] border border-white/10 ${feature.color} p-10 shadow-2xl`}
              >
                <div className="mb-auto">
                   <span className="text-xs font-mono uppercase tracking-widest text-white/30">Feature 0{index + 1}</span>
                </div>
                <h3 className="mb-4 text-3xl font-bold text-white tracking-tight leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}