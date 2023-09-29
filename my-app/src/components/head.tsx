import React from 'react';
import 'tailwindcss/tailwind.css';

const Header: React.FC = () => {
  return (
    <header className="bg-purple-600 p-4 flex justify-between items-center text-white">
      <div className="text-2xl font-bold lg:flex hidden">Finanças</div> {/* Exibir em telas maiores */}
      <div className="text-2xl font-bold flex justify-center lg:hidden">Finanças</div> {/* Centralizar em telas menores */}
      <div className="flex items-center lg:flex hidden"> {/* Exibir em telas maiores */}
        <div className="ml-4">Saiba mais sobre Finanças</div>
        <div className="ml-4">Centro de Segurança</div>
      </div>
    </header>
  );
};

export default Header;
