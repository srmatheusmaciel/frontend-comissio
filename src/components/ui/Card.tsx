import React from 'react';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`bg-black/20 backdrop-blur-xl border border-white/10
         rounded-3xl p-8 shadow-2xl ${className}`}
      {...props}
    />
  )
);
Card.displayName = "Card";