import { useLocale } from "next-intl";
import React from "react";

interface SectionBadgeProps {
  text: string;
  className?: string;
}

const SectionBadge: React.FC<SectionBadgeProps> = ({
  text,
  className = "",
}) => {
  const locale = useLocale();
  return (
    <span
      className={`${locale === "ar" ? "font-cairo" : "font-inter"} text-brand-orange inline-block rounded-full bg-[#FEE7DF] px-4 py-1.5 text-xs font-medium ${className}`}
    >
      {text}
    </span>
  );
};

export default SectionBadge;
