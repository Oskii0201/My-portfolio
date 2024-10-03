import { Variants } from "framer-motion";
export const sectionHeaderVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};
export const listItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
export const hoverAnimation: Variants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};
export const transitionSpring = {
  type: "spring",
  stiffness: 400,
  damping: 10,
};
