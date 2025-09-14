'use client';
import TabButton from '@/components/tabButton';
import Image from 'next/image';
import { useState } from 'react';
import { LuPlay } from 'react-icons/lu';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { PiDownloadSimpleBold } from 'react-icons/pi';

const Hero = () => {
  const languages = [
    {
      code: 'ENGLISH',
      name: 'ENGLISH',
      flag: 'https://eleven-public-cdn.elevenlabs.io/images/flags/circle-flags/us.svg',
    },
    {
      code: 'GERMAN',
      name: 'GERMAN',
      flag: 'https://eleven-public-cdn.elevenlabs.io/images/flags/circle-flags/de.svg',
    },
    {
      code: 'FRENCH',
      name: 'FRENCH',
      flag: 'https://eleven-public-cdn.elevenlabs.io/images/flags/circle-flags/fr.svg',
    },
    {
      code: 'HINDI',
      name: 'HINDI',
      flag: 'https://eleven-public-cdn.elevenlabs.io/images/flags/circle-flags/in.svg',
    },
    {
      code: 'SPANISH',
      name: 'SPANISH',
      flag: 'https://eleven-public-cdn.elevenlabs.io/images/flags/circle-flags/es.svg',
    },
    {
      code: 'ARABIC',
      name: 'ARABIC',
      flag: 'https://eleven-public-cdn.elevenlabs.io/images/flags/circle-flags/ae.svg',
    },
  ];

  const voiceOptions = [
    {
      icon: '🌊',
      name: 'Samara',
      description: 'Narrate a story',
      bgColor: 'bg-teal-100',
      iconBg: 'bg-teal-200',
    },
    {
      icon: '👥',
      name: '2 speakers',
      description: 'Create a dialogue',
      bgColor: 'bg-pink-100',
      iconBg: 'bg-pink-200',
    },
    {
      icon: '📢',
      name: 'Announcer',
      description: 'Voiceover a game',
      bgColor: 'bg-teal-100',
      iconBg: 'bg-teal-200',
    },
    {
      icon: '👮',
      name: 'Sergeant',
      description: 'Play a drill sergeant',
      bgColor: 'bg-purple-100',
      iconBg: 'bg-purple-200',
    },
    {
      icon: '🥔',
      name: 'Spuds',
      description: 'Recount an old story',
      bgColor: 'bg-teal-100',
      iconBg: 'bg-teal-200',
    },
    {
      icon: '👩',
      name: 'Jessica',
      description: 'Provide customer support',
      bgColor: 'bg-pink-100',
      iconBg: 'bg-pink-200',
    },
  ];

  const tabs = [
    {
      id: 'text_to_speech',
      text: 'TEXT TO SPEECH',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-message-square-text'
        >
          <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
          <line x1='10' x2='18' y1='9' y2='9' />
          <line x1='10' x2='16' y1='13' y2='13' />
        </svg>
      ),
    },
    {
      id: 'agents',
      text: 'AGENTS',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-users'
        >
          <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
          <circle cx='9' cy='7' r='4' />
          <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
        </svg>
      ),
    },
    {
      id: 'music',
      text: 'MUSIC',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-music'
        >
          <path d='M9 18V5l12-2v13' />
          <circle cx='9' cy='18' r='4' />
          <path d='M21 16v-2' />
          <circle cx='21' cy='18' r='2' />
        </svg>
      ),
    },
    {
      id: 'speech_to_text',
      text: 'SPEECH TO TEXT',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-file-audio'
        >
          <path d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z' />
          <path d='M12 18v-4m-2 2h4m3-2v-2' />
        </svg>
      ),
    },
    {
      id: 'dubbing',
      text: 'DUBBING',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-mic-vocal-recording'
        >
          <circle cx='12' cy='12' r='10' />
          <path d='M12 8a4 4 0 1 0 0 8z' />
          <path d='M16 12H8' />
        </svg>
      ),
    },
    {
      id: 'voice_cloning',
      text: 'VOICE CLONING',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-copy-x'
        >
          <path d='M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' />
          <path d='M18 10h-2' />
          <path d='M21 16H3c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-2c0-1.1-.9-2-2-2z' />
        </svg>
      ),
    },
    {
      id: 'elevenreader',
      text: 'ELEVENREADER',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-book-open-check'
        >
          <path d='M8 2.5V14a1 1 0 0 0 1 1h8.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 17.5 2h-9A1.5 1.5 0 0 0 7 3.5V14' />
          <path d='M18 2h-6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z' />
          <path d='m14 15 2 2 4-4' />
        </svg>
      ),
    },
  ];

  const [language, setLanguage] = useState('ENGLISH');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === language);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handlePlay = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/${language.toLowerCase()}`
      );

      if (!res.ok) {
        throw new Error('Failed to fetch audio');
      }

      const data = await res.json();
      console.log(data.audio_url);

      const audio = new Audio(data.audio_url);
      audio.play();

    } catch (error) {
      console.error('Error fetching or playing audio:', error);
    }
  };

  return (
    <section className='w-full text-center py-25 px-6'>
      <h1 className='text-4xl md:text-5xl font-normal text-black leading-tight mb-3'>
        The most realistic voice AI platform
      </h1>

      <p className='text-lg md:text-xl text-gray-900 max-w-4xl mx-auto mb-11'>
        AI voice models and products powering millions of developers, creators,
        and enterprises. From <br /> low-latency conversational agents to the
        leading AI voice generator for voiceovers and audiobooks.
      </p>

      <div className='flex justify-center gap-4'>
        <button className='px-4 py-2.5 bg-black text-white text-sm font-bold rounded-full hover:bg-gray-900 transition'>
          SIGN UP
        </button>
        <button className='px-4 py-2.5 bg-gray-100 text-black text-sm font-bold rounded-full hover:bg-gray-200 transition'>
          CONTACT SALES
        </button>
      </div>

<div className="mt-12 p-2 bg-white rounded-xl flex items-center justify-center">
  <div className="w-full flex flex-wrap items-center justify-center gap-2">
    {tabs.map((tab) => (
      <TabButton
        key={tab.id}
        icon={tab.icon}
        text={tab.text}
        isActive={tab.id === activeTab}
        onClick={() => setActiveTab(tab.id)}
      />
    ))}
  </div>
</div>


      <div className='flex flex-col items-center'>
        <div className='mt-2  p-1 bg-[#f2f2f2] rounded-2xl overflow-visible'>
          <div className='w-full max-w-5xl rounded-xl bg-white  shadow-lg border border-gray-200'>
            {/* Text area */}
            <div className='w-full rounded-lg mb-1 px-2'>
              <textarea
                placeholder='Enter or paste text here to generate audio'
                className='w-full text-xl h-64 outline-none resize-none text-gray-800  p-4 rounded-lg'
              />
            </div>

            {/* Voice selection chips */}
            <div className='flex flex-wrap gap-3 mb-2 justify-start px-4 pb-0'>
              {voiceOptions.map((voice, index) => (
                <button
                  key={index}
                  className={`flex items-center gap-1 px-2 py-2  hover:opacity-80 rounded-lg text-sm font-medium transition-all duration-200 border border-gray-200`}
                >
                  <span
                    className={`flex items-center justify-center w-4 h-4 ${voice.iconBg} rounded-full text-xs`}
                  >
                    {voice.icon}
                  </span>
                  <span className='text-gray-800 font-normal'>
                    {voice.name}
                  </span>
                  <span className='text-gray-400 text-xs'>|</span>
                  <span className='text-gray-600'>{voice.description}</span>
                </button>
              ))}
            </div>

            {/* Controls */}
            <hr className='text-gray-200 pb-2' />
            <div className='flex justify-between items-center px-4 pt-2 pb-4'>
              <div className='flex items-center justify-between'>
                <div className='relative'>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className='flex items-center gap-2 px-4 py-2 overflow-y-auto border border-gray-200 hover:border-black rounded-full font-semibold text-gray-800 transition-colors duration-200'
                  >
                    {currentLanguage?.flag && (
                      <Image
                        src={currentLanguage.flag}
                        alt={`${currentLanguage.name} flag`}
                        className='w-5 h-5'
                        width={20}
                        height={20}
                      />
                    )}
                    <span>{currentLanguage?.code}</span>
                    <MdKeyboardArrowDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <div className='absolute bottom-full mb-2 px-2 py-2 left-0 bg-white border border-gray-200 rounded-xl shadow-lg z-10 min-w-[200px]'>
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsDropdownOpen(false);
                          }}
                          className='w-full flex items-center gap-3 px-4 py-3 hover:border-0 hover:rounded-lg hover:bg-gray-100 text-left transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg'
                        >
                          <Image
                            src={lang.flag}
                            alt={`${lang.name} flag`}
                            className='w-5 h-5'
                            width={20}
                            height={20}
                          />
                          <span className='text-gray-700 font-bold'>{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className='flex space-x-2 items-center justify-center'>
                <button
                  onClick={handlePlay}
                  className='flex items-center justify-center px-4 py-2 gap-2 bg-black rounded-full hover:cursor-pointer'
                >
                  <LuPlay color='white' size={16} />
                  <p className='text-white font-semibold text-sm'>PLAY</p>
                </button>
                <button className='flex items-center justify-center text-lg w-10 h-10 bg-white text-black rounded-full border border-gray-200 hover:cursor-not-allowed'>
                  <PiDownloadSimpleBold color='gray' size={18} />
                </button>
              </div>
            </div>
          </div>
          <p className='m-3 text-sm font-bold text-center  flex justify-center items-center'>
            Powered by Eleven v3 (alpha)
          </p>
        </div>

        <div className='flex items-center mt-6 justify-center gap-3'>
          <h3 className='text-sm font-bold text-center text-gray-800'>
            EXPERIENCE THE FULL AUDIO AI PLATFORM
          </h3>
          <button className='px-4.5 py-2 bg-black text-white font-bold text-sm rounded-full hover:bg-gray-800'>
            SIGN UP
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
