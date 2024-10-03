"use client";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
interface SocialsProps {
  className?: string;
}
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
  {
    icon: <FaEnvelope />,
    label: "Email",
    href: "mailto:oskar0201@onet.pl",
  },
];
export const Socials: React.FC<SocialsProps> = ({ className = "" }) => {
  return (
    <div className={`flex gap-4 text-xl md:text-2xl ${className}`}>
      {socials.map((item) => (
        <motion.div
          key={item.href}
          className="flex justify-center font-bold"
          animate="visible"
          initial="hidden"
          whileHover={{ y: -2, color: "rgb(34 197 94)" }}
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
