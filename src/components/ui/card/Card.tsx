import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string; // Disabled state
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
}) => {
  return (
      <div className={`rounded-2xl border border-gray-200 bg-white p-2 dark:border-gray-800 dark:bg-white/3 md:p-2 ${className}`}>
      { children}
      </div>
  );
};

export default Card;
