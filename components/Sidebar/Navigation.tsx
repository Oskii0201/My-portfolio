"use client";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaLayerGroup,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

type NavItem = {
  icon: JSX.Element;
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { icon: <FaHome />, label: "Home", href: "#hero" },
  { icon: <FaUser />, label: "About", href: "#about" },
  { icon: <FaBriefcase />, label: "Projects", href: "#projects" },
  { icon: <FaLayerGroup />, label: "Stack", href: "#stack" },
  { icon: <FaEnvelope />, label: "Contact", href: "#contact" },
];
export const Navigation: React.FC = () => {
  return (
    <ul className="flex flex-col gap-4 text-lg">
      {navItems.map((item) => (
        <motion.li
          className="font-bold"
          key={item.href}
          animate="visible"
          initial="hidden"
          whileHover={{ scale: 1.1, color: "rgb(34 197 94)" }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            href={item.href}
            aria-label={item.label}
            key={item.href}
            className="flex items-center justify-center space-x-2 p-2 md:justify-start"
          >
            <span>{item.icon}</span>
            <span className="hidden md:block">{item.label}</span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};
