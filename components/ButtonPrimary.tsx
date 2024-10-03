import React from "react";
import { motion } from "framer-motion";
import { hoverAnimation, transitionSpring } from "@/utils/animationsVariants";

interface ButtonPrimaryProps {
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  download?: string | boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  href,
  onClick,
  target,
  rel,
  download,
  type = "button",
  disabled = false,
  children,
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full border border-gray-300 px-6 py-3 font-bold text-white shadow-md transition-colors duration-300";

  const enabledStyles = "bg-transparent hover:text-green-500";
  const disabledStyles = "cursor-not-allowed opacity-50";

  const combinedStyles = `${baseStyles} ${
    disabled ? disabledStyles : enabledStyles
  }`;

  const content = <span className="relative z-10">{children}</span>;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={combinedStyles}
        whileHover={!disabled ? "hover" : undefined}
        whileTap={!disabled ? "tap" : undefined}
        variants={hoverAnimation}
        transition={transitionSpring}
      >
        {content}
      </motion.a>
    );
  } else {
    return (
      <motion.button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={combinedStyles}
        whileHover={!disabled ? "hover" : undefined}
        whileTap={!disabled ? "tap" : undefined}
        variants={hoverAnimation}
        transition={transitionSpring}
      >
        {content}
      </motion.button>
    );
  }
};

export default ButtonPrimary;
