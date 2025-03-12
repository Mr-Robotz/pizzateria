import React from "react";
import Image from "next/image";

interface ButtonProps {
  name?: string;
  className?: string; // Allow custom Tailwind classes
  icon?: string | null; // Make `icon` optional
}

const Buttons = ({
  name = "Click Me", // Default label
  className = "bg-[#F54748] text-white px-6 py-4 rounded-full hover:bg-[#4b2b2be6] h flex items-center gap-3 cursor-pointer transition duration-300", // Default styles
  icon = "/assets/login.svg", // Default icon path
}) => {
  return (
    <button className={className}>
      {/* Only render the image if `icon` is provided */}
      {icon && <Image src={icon} alt={name} width={20} height={20} />}
      <span>{name}</span>
    </button>
  );
};

export default Buttons;
