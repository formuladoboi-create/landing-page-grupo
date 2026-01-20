
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-14" }) => (
  <div className={`flex flex-col items-center gap-1 ${className}`}>
    <img 
      alt="Fórmula do Boi Logo" 
      className="h-full w-auto object-contain brightness-0" 
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhcbyZlVGGE48-JxLYi81WqlCa2ZaXWke8asaCkM4SZCvIZpZVuVfqmOLpugnAZu57UfqMKhipvPNJmEOs4deuZsM09QKHcuR8DHESf9qpzbSb--3BoU8P9dZqT6-LRC7gNAGCEihf4zfJijB0vTuvDnvfGULel4_Xss_hr015vHBs4Y-YV3MM2eaFFIHEYewTkajEbkihS-fgzAU5yqa_pbvEUwiD9wCodheW_3Pqn8cOP123vYghjaUJGsdOcuN9tEt9A2JoBHs" 
    />
    <span className="font-bold text-[10px] tracking-[0.5em] text-black mt-2 uppercase">FÓRMULA DO BOI</span>
  </div>
);

export default Logo;
