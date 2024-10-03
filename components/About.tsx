"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import Image from "next/image";
import myImage from "../public/images/OskarDybas2.jpeg";
import ButtonPrimary from "@/components/ButtonPrimary";

const About: React.FC = () => {
  return (
    <Section id="about" className="gap-8">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-start md:gap-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex-1">
          <p className="text-lg">
            I&apos;m a computer science student with a deep passion for UX/UI
            design and front-end development. My journey began with a curiosity
            for how things work and a desire to create intuitive and beautiful
            user experiences. I believe in the power of combining aesthetics
            with functionality to bring ideas to life.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <ButtonPrimary
              href="/OskarDybasCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Oskar_Dybas_CV.pdf"
            >
              Download CV
            </ButtonPrimary>
            <ButtonPrimary href="#contact">Contact Me</ButtonPrimary>
          </div>
        </div>

        <div className="hidden flex-1 justify-center lg:flex">
          <Image
            src={myImage}
            alt="Oskar Dybas"
            className="w-52 rounded-full object-cover shadow-lg"
          />
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
      >
        {[
          {
            title: "My Mission",
            content:
              "To craft user-centric designs that not only look good but also provide seamless interactions, making technology more accessible and enjoyable.",
          },
          {
            title: "My Values",
            content:
              "Creativity, innovation, and continuous learning are at the core of my work. I strive to stay updated with the latest trends and technologies to deliver the best results.",
          },
        ].map((item) => (
          <div key={item.title}>
            <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
            <p className="text-gray-400">{item.content}</p>
          </div>
        ))}
      </motion.div>
    </Section>
  );
};

export default About;
