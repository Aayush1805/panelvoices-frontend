import { ReactNode } from 'react';

type TabButtonProps = {
  icon: ReactNode;                 
  text: string;                    
  isActive: boolean;             
  onClick: () => void;             
};

const TabButton = ({ icon, text, isActive, onClick }: TabButtonProps) => {
  const baseClasses =
    "flex items-center border border-gray-100 gap-2 px-2.5 py-2 rounded-lg transition-all hover:cursor-pointer";

  const activeClasses = isActive
    ? "bg-gray-100 text-black hover:border-black"
    : "bg-white text-gray-800";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${activeClasses}`}
    >
      {icon}
      <span
        className={`text-xs whitespace-nowrap ${
          isActive ? "font-bold" : "font-normal"
        }`}
      >
        {text}
      </span>
    </button>
  );
};

export default TabButton;

