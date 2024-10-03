import React, { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "" }) => {
  return (
    <section
      id={id}
      className={`relative flex min-h-screen flex-col items-center justify-center px-4 py-4 sm:px-8 md:px-16 lg:px-32 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
