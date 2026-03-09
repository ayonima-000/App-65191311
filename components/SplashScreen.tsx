'use client';

import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      id="splash"
      className={`fixed top-0 left-0 w-full h-full bg-[#059363] flex justify-center items-center z-[1000] transition-transform duration-[400ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${
        hide ? '-translate-x-full' : ''
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="/logosmk.png" 
        alt="Logo SMK" 
        className="w-[160px]"
      />
    </div>
  );
}
