"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
  const [isActive, setIsActive] = React.useState(false);

  const toggleActive = () => setIsActive((active) => !active);

  return (
    <div className="relative">
      <Input
        {...props}
        className="border-b focus:border-green-600"
        onFocus={toggleActive}
        onBlur={toggleActive}
      />
      <label
        className={cn("absolute  duration-300", {
          "left-[5%] top-1/2 -translate-y-1/2": !props.value && !isActive,
          "left-[3%] -top-2 text-xs text-green-600 bg-white z-10":
            props.value || isActive,
        })}
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
