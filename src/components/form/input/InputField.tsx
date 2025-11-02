import React, { FC } from "react";

interface InputProps {
  type?: "text" | "number" | "email" | "password" | "date" | "time" | string;
  id?: string;
  name?: string;
  placeholder?: string;
  defaultValue?: string | number;
  value?: string | number; // Add support for controlled components
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  min?: string;
  max?: string;
  maxLength?: number;
  step?: number;
  disabled?: boolean;
  success?: boolean;
  error?: boolean;
  hint?: string; // Optional hint text
  required?: boolean; // Optional required prop
  dir?: "ltr" | "rtl"; // Optional direction prop
}

const Input: FC<InputProps> = ({
  type = "text",
  id,
  name,
  placeholder,
  defaultValue,
  value,
  onChange,
  className = "",
  min = 0,
  max,
  maxLength,
  step,
  disabled = false,
  success = false,
  error = false,
  hint,
  required = false,
  dir,
}) => {
  // Determine input styles based on state (disabled, success, error)
  let inputClasses = `h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs text-gray-400 focus:outline-hidden focus:ring-3 bg-gray-900 text-white/90 placeholder:text-white/30 focus:border-brand-800 ${className}`;

  // Add styles for the different states
  if (disabled) {
    inputClasses += `cursor-not-allowed bg-gray-800 text-gray-400 border-gray-700`;
  } else if (error) {
    inputClasses += `focus:ring-3 focus:ring-error-500/10 text-error-400 border-error-500`;
  } else if (success) {
    inputClasses += `focus:ring-success-500/10 focus:border-success-300 text-success-400 border-success-500`;
  } else {
    inputClasses += `focus:ring-3 focus:ring-brand-500/10 border-gray-700 bg-gray-900 text-white/90 focus:border-brand-800`;
  }

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        maxLength={maxLength}
        step={step}
        disabled={disabled}
        className={inputClasses}
        required={required}
        dir={dir}
      />

      {/* Optional Hint Text */}
      {hint && (
        <p
          className={`mt-1.5 text-xs ${
            error
              ? "text-error-500"
              : success
                ? "text-success-500"
                : "text-end text-gray-500"
          }`}
        >
          {hint}
        </p>
      )}
    </div>
  );
};

export default Input;
