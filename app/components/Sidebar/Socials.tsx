"use client";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

type Social = {
  icon: JSX.Element;
  label: string;
  href: string;
};
const socials: Social[] = [
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/oskar-dybas",
  },
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/Oskii0201" },
  {
    icon: <FaFacebook />,
    label: "Facebook",
    href: "https://facebook.com/oskar.dybas.1",
  },
];
export const Socials: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 text-xl md:flex-row md:justify-between md:text-2xl">
      {socials.map((item) => (
        <motion.div
          key={item.href}
          className="flex justify-center font-bold"
          animate="visible"
          initial="hidden"
          whileHover={{ scale: 1.2, color: "rgb(74 222 128)" }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            href={item.href}
            aria-label={item.label}
            key={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
