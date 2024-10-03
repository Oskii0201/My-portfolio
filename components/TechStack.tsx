import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import {
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiCssmodules,
  SiFramer,
  SiMysql,
  SiPostgresql,
  SiDotnet,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { IconType } from "react-icons";
import {
  sectionHeaderVariants,
  listItemVariants,
  hoverAnimation,
  transitionSpring,
} from "@/utils/animationsVariants";

interface Tech {
  name: string;
  icon: IconType;
}

const techStackData: Tech[] = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "CSS Modules", icon: SiCssmodules },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "C#", icon: TbBrandCSharp },
  { name: ".NET", icon: SiDotnet },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: FaGitAlt },
  { name: "Figma", icon: SiFigma },
  { name: "Framer Motion", icon: SiFramer },
];

const TechStack: React.FC = () => {
  return (
    <Section id="stack" className="gap-8">
      <motion.h2
        className="section-heading"
        variants={sectionHeaderVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Known technologies
      </motion.h2>
      <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 md:gap-12 lg:grid-cols-6">
        {techStackData.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center"
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                variants={hoverAnimation}
                whileHover="hover"
                whileTap="tap"
                transition={transitionSpring}
                className="flex cursor-pointer flex-col items-center justify-center gap-2 text-gray-400"
              >
                <IconComponent className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
                <p className="text-xs">{tech.name}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default TechStack;
