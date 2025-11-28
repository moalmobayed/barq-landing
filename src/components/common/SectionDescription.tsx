import { useLocale } from "next-intl";
import React from "react";

interface SectionDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({
  children,
  className = "",
}) => {
  const locale = useLocale();
  return (
    <p
      className={`${locale === "ar" ? "font-cairo" : "font-inter"} max-w-2xl justify-self-center text-sm text-gray-600 sm:text-base ${className}`}
    >
      {children}
    </p>
  );
};

export default SectionDescription;
