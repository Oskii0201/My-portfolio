import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { listItemVariants } from "@/utils/animationsVariants";

interface ProjectCardProps {
  project: {
    image: string;
    title: string;
    description: string;
    codeLink?: string;
    demoLink?: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const buttonStyles =
    "border border-gray-500 px-3 py-1 hover:text-green-500 transition text-white hover:scale-110 rounded-md";
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg shadow-lg"
      variants={listItemVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ delay: index * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={350}
        className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="scrollbar-global max-h-full overflow-y-auto p-6 text-center">
          <h3 className="mb-2 text-2xl font-semibold text-white">
            {project.title}
          </h3>
          <p className="mb-4 text-gray-300">{project.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles}
              >
                Code
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles}
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
