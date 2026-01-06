"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FloatingCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const y3 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      <div className="floatingcards_fixed absolute inset-0 flex items-center justify-center">
        {/* Gradient waves */}
        <div className="gradientwave_wrapper absolute inset-0">
          <div className="gradientwave_gradient absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 animate-pulse"></div>
        </div>

        {/* Cards */}
        <motion.div
          className="card_wrapper absolute top-1/4 left-1/4 bg-white/10 backdrop-blur-md p-4 rounded-lg"
          style={{ y: y1, rotate: rotate1 }}
        >
          <div className="text-white">Connect Instantly</div>
        </motion.div>

        <motion.div
          className="card_wrapper absolute top-1/3 right-1/4 bg-black/50 p-4 rounded-lg"
          style={{ y: y2, rotate: rotate2 }}
        >
          <div className="text-white">Build Your Identity</div>
        </motion.div>

        <motion.div
          className="card_wrapper absolute bottom-1/4 left-1/3 bg-white/10 backdrop-blur-md p-4 rounded-lg"
          style={{ y: y3, rotate: rotate3 }}
        >
          <div className="text-white">Discover Together</div>
        </motion.div>
      </div>
    </section>
  );
}