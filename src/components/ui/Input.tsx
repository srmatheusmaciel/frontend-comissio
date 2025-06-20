import React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      className={`w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10
         rounded-xl text-white placeholder-gray-500 focus:outline-none 
         focus:ring-2 focus:ring-purple-500 ${className}`}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";