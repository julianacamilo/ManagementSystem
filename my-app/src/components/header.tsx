import React from 'react';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';



const HeaderP: React.FC = () => {
    const router = useRouter();

    const handleNavigate = (route: string) => {
      router.push(route);
    };
  
  return (
    <header className="bg-purple-600 p-4 flex justify-between items-center text-white">
    <div className="text-2xl font-bold">Finanças</div>
    <div className="flex items-center">
    <div className="flex items-center">
    <button
          onClick={() => handleNavigate('/profile')}
          className="w-32 bg-purple-800 text-white rounded-full py-3 mb-4 hover:bg-purple-700 transition duration-300"
        >
        Meu Perfil
        </button>
      
      </div>

    
    </div>
  </header>
  );
};

export default HeaderP;