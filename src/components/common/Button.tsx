import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) => {
  const locale = useLocale();

  const baseStyles = `inline-flex items-center justify-center rounded-lg ${locale === "ar" ? "font-cairo" : "font-manrope"} font-semibold transition-all duration-300`;

  const variantStyles = {
    primary:
      "bg-brand-orange text-white hover:bg-orange-600 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-brand-blue text-white hover:bg-blue-800 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
    outline:
      "border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base sm:px-8 sm:py-4",
    lg: "px-8 py-4 text-lg sm:px-10 sm:py-5",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
};

export default Button;
