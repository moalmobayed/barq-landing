import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = "",
  as: Component = "h2",
}) => {
  return (
    <Component
      className={`font-lexend text-brand-blue text-3xl font-bold sm:text-4xl md:text-5xl ${className}`}
    >
      {children}
    </Component>
  );
};

export default SectionTitle;
