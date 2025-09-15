import { ReactNode } from 'react';

type TabButtonProps = {
  icon: ReactNode;
  text: string;
  isActive: boolean;
  onClick: () => void;
};

const TabButton = ({ icon, text, isActive, onClick }: TabButtonProps) => {
  const baseClasses =
    "flex items-center border border-gray-200 gap-2 px-1.5 py-2 rounded-lg transition-all hover:cursor-pointer hover:border-black";

  const activeClasses = isActive
    ? "bg-[#f2f2f2] text-[#000000]"
    : "bg-white text-[#6e6e6e]";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${activeClasses}`}
    >
      <span>{icon}</span>
      <span
        className={'whitespace-nowrap sm:text-sm font-bold' }
      >
        {text}
      </span>
    </button>
  );
};

export default TabButton;