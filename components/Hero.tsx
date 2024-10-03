"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoLocationSharp } from "react-icons/io5";
import Section from "./Section";
import ParticlesBackground from "./ParticlesBackground";
import ButtonPrimary from "@/components/ButtonPrimary";

const Hero: React.FC = () => {
  return (
    <Section id="hero" className="overflow-hidden pb-12">
      <ParticlesBackground />

      <div className="z-10 flex flex-col items-center gap-6">
        <motion.h1
          className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello Everyone, I'm Oskar!
        </motion.h1>
        <motion.p
          className="max-w-3xl text-center text-lg text-gray-300 sm:text-xl md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Crafting immersive digital experiences where{" "}
          <span className="text-green-500">creativity</span> meets{" "}
          <span className="text-green-500">code</span>. As a passionate UX/UI
          designer and front-end developer, I transform ideas into visually
          stunning and user-friendly interfaces. Ready to dive in?
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 md:mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {["UX/UI Designer", "Front-End Developer"].map((role) => (
            <motion.span
              key={role}
              className="rounded-full border border-gray-500 px-4 py-2 text-sm font-semibold uppercase text-white sm:text-base"
              whileHover={{
                scale: 1.1,
                borderColor: "#ffffff",
                color: "#ffffff",
              }}
              transition={{ duration: 0.3 }}
            >
              {role}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          className="flex w-full max-w-md flex-col items-center justify-between gap-6 sm:gap-0 md:mt-8 md:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <div className="flex items-center gap-4">
            <IoLocationSharp className="text-xl text-green-500" />
            <span>Katowice, Poland</span>
          </div>
          <ButtonPrimary href="#about">More About Me</ButtonPrimary>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-2 z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg
          className="h-6 w-6 text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </Section>
  );
};

export default Hero;
