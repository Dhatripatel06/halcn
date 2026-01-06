"use client";

import { motion } from "framer-motion";

export default function ScrollText() {
  return (
    <section className="scrolltext_parallax relative h-20 w-full overflow-hidden bg-black">
      <div className="scrolltext_scroller flex">
        <motion.div
          className="flex min-w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <span className="scrollText text-white text-2xl font-bold mr-8">
            SHARE CONNECT DISCOVER
          </span>
          <span className="scrollText text-white text-2xl font-bold mr-8">
            SHARE CONNECT DISCOVER
          </span>
          <span className="scrollText text-white text-2xl font-bold mr-8">
            SHARE CONNECT DISCOVER
          </span>
        </motion.div>
      </div>
    </section>
  );
}