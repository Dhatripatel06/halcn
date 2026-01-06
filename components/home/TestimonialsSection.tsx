"use client";

import TestimonialCard from "@/components/home/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

export default function TestimonialsSection() {
  return (
    <section className="bg-brand-black relative w-full overflow-hidden">
      {/* Mobile Version */}
      <div className="flex flex-col items-center overflow-hidden py-20 md:hidden">
        <div className="mb-10 flex flex-col items-center">
          <motion.h2
            className="font-raleway text-2xl font-bold text-white"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.h2>
        </div>
        <div className="flex w-full overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex min-w-max gap-6 px-4"
          >
            {[...testimonials].map((item, index) => (
              <TestimonialCard key={index} data={item} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Desktop Version: Static Display */}
      <div className="hidden py-20 md:block">
        <div className="flex w-full flex-col items-center justify-center overflow-hidden h-screen">
          {/* Header Layer */}
          <div className="mb-16 flex flex-col items-center justify-center">
            <motion.h2
              className="font-raleway text-[2rem] font-bold text-white"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Testimonials
            </motion.h2>
          </div>

          {/* Cards Layer - Static with overflow hint */}
          <div className="relative w-full overflow-hidden">
            <div className="mx-auto flex max-w-[1400px] gap-5 px-10">
              {testimonials.slice(0, 4).map((item, index) => (
                <TestimonialCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
