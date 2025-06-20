import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      className={`w-full py-3 px-6 bg-gradient-to-r from-purple-600
         to-cyan-600 hover:from-purple-700
          hover:to-cyan-700 disabled:opacity-50 
          disabled:cursor-not-allowed text-white
           font-semibold rounded-xl
            transition-all duration-300
             transform hover:scale-105 ${className}`}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";