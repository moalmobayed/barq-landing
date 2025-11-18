import React from "react";
import SectionBadge from "./SectionBadge";
import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";

interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  className = "",
  align = "center",
  titleAs = "h2",
}) => {
  const alignmentClass =
    align === "center"
      ? "text-center"
      : align === "right"
        ? "text-right"
        : "text-left";

  return (
    <div className={`space-y-6 ${alignmentClass} ${className}`}>
      {badge && (
        <div>
          <SectionBadge text={badge} />
        </div>
      )}
      <SectionTitle as={titleAs}>{title}</SectionTitle>
      {description && <SectionDescription>{description}</SectionDescription>}
    </div>
  );
};

export default SectionHeader;
