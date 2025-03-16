import "./Card.css";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={`relative text-white flex flex-col justify-between p-4 bg-black/25 border border-white/40 backdrop-blur-lg rounded-lg transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_1px_#ffffff8f] hover:border-white/45 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
