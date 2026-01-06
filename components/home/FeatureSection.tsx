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
    description: "Once you've chosen your COAM, our team of technicians will carefully deliver and calibrate your machine.",
    color: "bg-red-600",
  },
];

export default function FeatureSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use a 500vh track to give plenty of "holding" time for the background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    // The height here (500vh) is what "holds" the background
    <div ref={containerRef} className="relative h-[500vh] w-full bg-black">
      
      {/* This sticky div is the "camera" that stays still while you scroll */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Big Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <motion.span 
            style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]) }}
            className="text-[25vw] font-black uppercase italic text-white tracking-tighter"
          >
            HALCN
          </motion.span>
        </div>

        {/* Title that stays fixed */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]) }}
          className="absolute top-20 text-center z-50"
        >
          <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white tracking-tight">
            Our Services
          </h2>
        </motion.div>

        {/* Cards Sliding Logic */}
        <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center">
          {features.map((feature, index) => {
            // Each card gets a specific 20% slice of the total 500vh scroll
            const start = index * 0.25;
            const end = start + 0.2;
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const x = useTransform(scrollYProgress, [start, end], ["150vw", "0vw"]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const rotate = useTransform(scrollYProgress, [start, end], [30, 0]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scale = useTransform(scrollYProgress, [end, end + 0.2], [1, 0.9]);

            return (
              <motion.div
                key={index}
                style={{ 
                  x, 
                  rotate, 
                  scale,
                  zIndex: index + 10,
                  // Staggered horizontal positioning like Daydream
                  left: index === 0 ? "15%" : index === 1 ? "35%" : "55%",
                  // Slight vertical tilt for the "messy stack" look
                  top: index === 0 ? "20%" : index === 1 ? "25%" : "22%",
                }}
                className={`absolute w-[320px] md:w-[400px] h-[480px] flex flex-col justify-end rounded-[3rem] border border-white/10 ${feature.color} p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)]`}
              >
                <div className="mb-auto">
                   <span className="text-sm font-mono text-red-600 font-bold uppercase tracking-widest">
                     Step 0{index + 1}
                   </span>
                </div>
                <h3 className="mb-4 text-3xl font-bold text-white leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}