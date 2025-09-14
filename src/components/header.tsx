import Image from "next/image";
import { MdKeyboardArrowDown } from 'react-icons/md';

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-16 py-4">
      {/* Left Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/elevenlabs-logo-black.png"
          width={120}
          height={40}
          alt="ElevenLabs"
        />
      </div>

      {/* Center Navigation */}
      <nav className="flex items-center space-x-6 text-sm font-medium text-gray-800">
        <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
          <span>Creative Platform</span>
          <span className="text-xs"><MdKeyboardArrowDown size={20} /></span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
          <span>Agents Platform</span>
          <span className="text-xs"><MdKeyboardArrowDown size={20} /></span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
          <span>Developers</span>
          <span className="text-xs"><MdKeyboardArrowDown size={20} /></span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-black">
          <span>Resources</span>
          <span className="text-xs"><MdKeyboardArrowDown size={20} /></span>
        </div>
        <span className="cursor-pointer hover:text-black">Enterprise</span>
        <span className="cursor-pointer hover:text-black">Pricing</span>
      </nav>

      {/* Right Buttons */}
      <div className="flex items-center space-x-6">
        <button className="text-sm font-medium text-gray-800 hover:text-black">
          Log in
        </button>
        <button className="px-3 py-1 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;
