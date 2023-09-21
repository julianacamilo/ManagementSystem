import React from 'react';
import 'tailwindcss/tailwind.css';
const Header: React.FC = () => {
  return (
    <header className="bg-purple-600 p-4 flex justify-between items-center text-white">
    <div className="text-2xl font-bold">Finanças</div>
    <div className="flex items-center">
      <div className="ml-4">Saiba mais sobre Finanças</div>
      <div className="ml-4">Centro de Segurança</div>
    
    </div>
  </header>
  );
};

export default Header;
