import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import ContactForm from "@/components/ContactForm";
import { Socials } from "@/components/Socials";
import {
  sectionHeaderVariants,
  listItemVariants,
} from "@/utils/animationsVariants";
const Contact: React.FC = () => {
  return (
    <Section id="contact" className="gap-8">
      <motion.h2
        className="section-heading"
        variants={sectionHeaderVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>
      <div className="flex w-full flex-col gap-12 md:flex-row">
        <motion.div
          className="flex-1"
          variants={listItemVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0, duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 text-2xl font-semibold">Contact Me</h3>
          <p className="mb-8 text-gray-400">
            I&apos;m open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <ContactForm />
        </motion.div>
        <motion.div
          className="flex-1"
          variants={listItemVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.1, duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 text-2xl font-semibold">Social Media</h3>
          <p className="mb-8 text-gray-400">
            You can also find me on the following platforms:
          </p>
          <Socials className="flex-row" />
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
