import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUser, faPhone, faBullseye } from '@fortawesome/free-solid-svg-icons';

export default function Header({ isArabic, setIsArabic }) {
  return (
    <header className="bg-black border-b border-yellow-500/30 py-2 w-full" style={{ minHeight: 'max(48px, 5vh)' }}>
      <div className="container mx-auto flex justify-between items-center px-2 lg:px-4" style={{ maxWidth: '1600px' }}>
        <div className="flex items-center" style={{ flex: '0 0 auto' }}>
          <div className="relative">
            <div className="rounded-full border-2 border-yellow-500 flex items-center justify-center" 
                 style={{ width: 'clamp(32px, 3vw, 48px)', height: 'clamp(32px, 3vw, 48px)' }}>
              <FontAwesomeIcon icon={faBullseye} className="text-yellow-500" 
                               style={{ fontSize: 'clamp(16px, 1.5vw, 24px)' }} />
            </div>
          </div>
          <div className={`ml-2 ${isArabic ? 'mr-2 ml-0' : ''}`} style={{ marginLeft: isArabic ? 0 : 'clamp(8px, 1vw, 12px)', marginRight: isArabic ? 'clamp(8px, 1vw, 12px)' : 0 }}>
            <h1 className="text-yellow-500 font-bold tracking-wider" 
                style={{ fontSize: 'clamp(18px, 2vw, 30px)' }}>الزعيم</h1>
            <p className="text-yellow-500" 
               style={{ fontSize: 'clamp(10px, 0.9vw, 14px)' }}>{isArabic ? 'للمأكولات الشعبية' : 'FOOD CORNER'}</p>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-4" style={{ flex: '0 1 auto' }}>
          <button className="border border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-black transition"
                  style={{ fontSize: 'clamp(12px, 1vw, 16px)', padding: 'clamp(4px, 0.5vw, 8px) clamp(8px, 1vw, 16px)' }}>
            {isArabic ? 'الرئيسية' : 'Home'}
          </button>
          <button className="border border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-black transition"
                  style={{ fontSize: 'clamp(12px, 1vw, 16px)', padding: 'clamp(4px, 0.5vw, 8px) clamp(8px, 1vw, 16px)' }}>
            {isArabic ? 'القائمة' : 'Menu'}
          </button>
        </div>
        
        <div className="flex items-center" style={{ flex: '0 0 auto' }}>
          <div className="flex flex-col items-center mx-2 lg:mx-6" style={{ margin: '0 clamp(8px, 1vw, 24px)' }}>
            <span className="text-yellow-500 mb-0.5" 
                  style={{ fontSize: 'clamp(10px, 0.8vw, 14px)' }}>HOTLINE</span>
            <span className="text-white font-extrabold tracking-widest" 
                  style={{ fontSize: 'clamp(16px, 1.8vw, 30px)' }}>01211938777</span>
          </div>
          
          <div className="flex items-center gap-2 lg:gap-4" style={{ gap: 'clamp(8px, 1vw, 16px)' }}>
            <button
              onClick={() => setIsArabic(!isArabic)}
              className="rounded-full border-2 border-yellow-500 bg-black flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
              style={{ width: 'clamp(28px, 2.5vw, 36px)', height: 'clamp(28px, 2.5vw, 36px)' }}>
              <FontAwesomeIcon icon={faGlobe} style={{ fontSize: 'clamp(14px, 1.2vw, 20px)' }} />
            </button>
            <button className="rounded-full border-2 border-yellow-500 bg-black flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
                    style={{ width: 'clamp(28px, 2.5vw, 36px)', height: 'clamp(28px, 2.5vw, 36px)' }}>
              <FontAwesomeIcon icon={faUser} style={{ fontSize: 'clamp(14px, 1.2vw, 20px)' }} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 