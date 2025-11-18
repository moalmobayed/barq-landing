import React from "react";

interface SectionDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({
  children,
  className = "",
}) => {
  return (
    <p className={`font-inter text-sm text-gray-600 sm:text-base ${className}`}>
      {children}
    </p>
  );
};

export default SectionDescription;
