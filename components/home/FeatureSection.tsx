"use client";

import {
  HTMLMotionProps,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { RefreshCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { type IconType } from "react-icons";

interface IconBoxProps {
  icon: IconType;
  className?: string;
  iconClassName?: string;
}

function IconBox({
  icon: Icon,
  className = "",
  iconClassName = "",
}: IconBoxProps) {
  return (
    <div
      className={`bg-brand-dark-red relative flex h-[35px] w-[35px] items-center justify-center rounded-xl border border-white text-white md:h-[62px] md:w-[62px] ${className}`}
    >
      <Icon
        className={`h-[18px] w-[18px] md:h-[32px] md:w-[32px] ${iconClassName}`}
      />
    </div>
  );
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "white" | "gradient";
  className?: string;
  children: React.ReactNode;
}

function Button({
  variant = "white",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    white:
      "bg-white text-brand-black hover:bg-gray-100 shadow-lg shadow-white/10",
    gradient:
      "bg-gradient-to-r from-brand-red to-brand-dark-red text-white shadow-lg shadow-brand-red/20",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={
        "font-raleway flex cursor-pointer items-center justify-center rounded-full px-5 py-2.5 text-base font-bold transition-colors"
      }
      {...props}
    >
      {children}
    </motion.button>
  );
}

const features = [
  {
    title: "Supplying",
    description:
      "Once you have you Georgia Lottery COAM license, you can browse and choose the best machines for your business. Are you patrons more inclined to use traditional skill machines?",
  },
  {
    title: "License Approval",
    description:
      "Getting your GA Lottery COAM Location Class B License is a hassle. Don't want to deal with the stress of finding rules and regulations by yourself?",
  },
  {
    title: "Set-Up",
    description:
      "Once you've chosen your COAM, our team of technicians will carefully deliver your machine. This includes an expert set-up, quality-assurance check, and expert advice if you have questions or concerns.",
  },
];

export default function FeatureSection() {
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within the tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Card 1: animates from 0% to 25% of scroll
  const x1 = useTransform(scrollYProgress, [0, 0.25], ["100%", "0%"]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.25], [15, -5]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.12], [0, 1]);

  // Card 2: animates from 35% to 60% of scroll (slight gap for card 1 to settle)
  const x2 = useTransform(scrollYProgress, [0.35, 0.6], ["100%", "0%"]);
  const rotate2 = useTransform(scrollYProgress, [0.35, 0.6], [-15, 5]);
  const scale2 = useTransform(scrollYProgress, [0.35, 0.6], [0.9, 1.05]);
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.47], [0, 1]);

  const x3 = useTransform(scrollYProgress, [0.7, 0.95], ["100%", "0%"]);
  const rotate3 = useTransform(scrollYProgress, [0.7, 0.95], [12, -5]);
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.82], [0, 1]);

  return (
    <>
      <div ref={containerRef} className="relative min-h-[150vh] w-full">
        <section className="bg-brand-black flex h-[150vh] w-full flex-col items-center justify-center overflow-visible px-5 py-10 md:sticky md:top-0 md:px-20">
          {/* Header Content */}
          <div className="mb-20 flex w-full max-w-[1000px] flex-col items-center justify-center text-center">
            <div className="mb-2.5">
              <IconBox icon={RefreshCcw} />
            </div>

            <motion.p
              className="font-raleway mb-2.5 text-sm font-normal text-gray-300 md:text-base"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Want to introduce Coin Operated Amusement Machines (COAM) to your
              business?
            </motion.p>

            <motion.h2
              className="font-raleway mb-2.5 text-2xl font-bold text-white md:text-[2rem] md:leading-tight"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let Us Take Care Of Your Installation, Service, And Licensing
              Needs!
            </motion.h2>

            <motion.p
              className="font-raleway mb-10 max-w-3xl text-base font-normal text-gray-300"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Halcyon Amusements carries the latest coin operated amusement
              machines (COAM) on the market. Browse our inventory and find the
              perfect fit for your business. When it comes to skill games, we
              have options for establishments and clientele of all kind.
            </motion.p>

            <Button variant="gradient">Know More</Button>
          </div>

          {/* Cards Container */}
          <div className="relative flex w-full max-w-[1200px] flex-col items-center justify-center gap-6 md:h-[500px] md:flex-row md:gap-0">
            {features.map((feature, index) => {
              const getDesktopLayoutClasses = () => {
                if (index === 0) return "md:z-0 md:mr-[-20px]";
                if (index === 1) return "md:z-5 custom-shadow";
                if (index === 2) return "md:z-10 md:ml-[-20px]";
                return "";
              };

              const backgroundStyle =
                index === 1 ? "bg-white/10 backdrop-blur-md" : "bg-[#1A1A1A]";

              // Dynamic styles based on scroll (only applied on desktop)
              const style = isDesktop
                ? {
                    x: index === 0 ? x1 : index === 1 ? x2 : x3,
                    rotate:
                      index === 0 ? rotate1 : index === 1 ? rotate2 : rotate3,
                    scale: index === 1 ? scale2 : 1,
                    opacity:
                      index === 0
                        ? opacity1
                        : index === 1
                        ? opacity2
                        : opacity3,
                  }
                : {};

              // Mobile fallback - simple fade in animation
              const mobileVariants = {
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.2 },
                },
              };

              return (
                <motion.div
                  key={index}
                  style={isDesktop ? style : undefined}
                  variants={!isDesktop ? mobileVariants : undefined}
                  initial={!isDesktop ? "hidden" : undefined}
                  whileInView={!isDesktop ? "visible" : undefined}
                  viewport={{ once: true }}
                  className={`flex h-[400px] w-full flex-col justify-end rounded-[20px] border border-[#d92319] ${backgroundStyle} p-8 text-white transition-all duration-300 hover:z-20 md:w-[350px] ${getDesktopLayoutClasses()}`}
                >
                  <div style={{ overflow: "hidden" }}>
                    <motion.h3
                      className="font-raleway mb-2.5 text-xl font-bold"
                      initial={{ y: 100, rotate: 3 }}
                      whileInView={{ y: 0, rotate: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {feature.title}
                    </motion.h3>
                  </div>
                  <div style={{ overflow: "hidden" }}>
                    <motion.p
                      className="font-raleway text-base leading-[1.3] font-normal text-gray-300"
                      initial={{ y: 100, rotate: 3 }}
                      whileInView={{ y: 0, rotate: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
