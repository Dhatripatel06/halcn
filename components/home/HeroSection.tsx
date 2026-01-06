"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="hero_wrapper relative h-screen w-full overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="hero_fog1 absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      <div className="hero_fog2 absolute inset-0 bg-gradient-to-t from-transparent to-black/50"></div>
      <div className="hero_logo absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex">
        {/* Placeholder for logo letters */}
        <span className="text-white text-6xl font-bold">HALCN</span>
      </div>
      <motion.div
        className="hero_text absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div style={{ overflow: "hidden" }}>
          <motion.div
            className="line text-4xl font-bold"
            initial={{ y: 100, rotate: 3 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Sound unchained.
          </motion.div>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.div
            className="line text-4xl font-bold"
            initial={{ y: 100, rotate: 3 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            Music, redefined.
          </motion.div>
        </div>
      </motion.div>
      <div className="hero_aurora absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 animate-pulse"></div>
      </div>
      <div className="hero_overlay absolute inset-0 bg-black/30"></div>
    </section>
  );
}
