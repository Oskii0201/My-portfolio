import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import ProjectCard from "./ProjectCard";

interface Project {
  image: string;
  title: string;
  description: string;
  codeLink?: string;
  demoLink?: string;
}

const projectsData: Project[] = [
  {
    image: "/images/portfolio.png",
    title: "Portfolio",
    description:
      "Project focused on creating a personal portfolio website that showcases my skills in UX/UI design and front-end development. The site aims to present my work, projects, and experience in an attractive and clear manner.",
    codeLink: "https://github.com/Oskii0201/my-portfolio",
  },
  {
    image: "/images/universitypilot.png",
    title: "University Pilot (In Progress)",
    description:
      "University Pilot is a web application aimed at automating the creation of class schedules for higher education institutions. It utilizes advanced machine learning algorithms to optimize timetables, taking into account room availability, lecturers, and student group preferences. The application aims to facilitate university administration work and improve time management efficiency.",
  },
  {
    image: "/images/passwordgenerator.png",
    title: "Password Generator",
    description:
      "A secure password generator built with React that allows users to generate strong passwords tailored to their needs. Users can specify the password length and choose whether to include lowercase and uppercase letters, numbers, and special characters.",
    codeLink: "https://github.com/Oskii0201/password-generator",
    demoLink: "https://passwrod-generator-od.netlify.app/",
  },
  {
    image: "/images/usermanagementtable.png",
    title: "User Management Table",
    description:
      "A user management application built using React, Redux, TypeScript, and Tailwind CSS. It fetches user data from an external API and displays it in a table with advanced filtering and sorting features, along with the ability to export data to CSV and PDF files. An ideal tool for managing large sets of user data.",
    codeLink: "https://github.com/Oskii0201/User-management-table",
    demoLink: "https://user-management-table-dybas.netlify.app/",
  },
  {
    image: "/images/currencyconverter.png",
    title: "Currency Converter",
    description:
      "A simple application written in React and TypeScript that allows conversion of amounts between different currencies and displays current exchange rates. The application fetches data from an API in real-time, providing accurate and up-to-date financial information for users.",
    codeLink: "https://github.com/Oskii0201/Currency-Converter",
    demoLink: "https://currency-converter-od.netlify.app/",
  },
];

const Projects: React.FC = () => {
  return (
    <Section id="projects" className="gap-8">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
