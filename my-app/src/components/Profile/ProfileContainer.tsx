import React from 'react';
import { useRouter } from 'next/router';

const ProfileContainer = () => {
  const router = useRouter();

  const handleNavigate = (route: string) => {
    router.push(route);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-6 bg-purple-700 text-center rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-white mb-4">Escolha uma Opção:</h2>
        <button
          onClick={() => handleNavigate('/despesas')}
          className="w-full bg-purple-900 text-white rounded-full py-3 mb-2 hover:bg-purple-800 transition duration-300"
        >
          Minhas Despesas
        </button>
        <button
          onClick={() => handleNavigate('/metas')}
          className="w-full bg-purple-900 text-white rounded-full py-3 mb-2 hover:bg-purple-800 transition duration-300"
        >
          Metas de Orçamento
        </button>
        <button
          onClick={() => handleNavigate('/ganhos')}
          className="w-full bg-purple-900 text-white rounded-full py-3 mb-2 hover:bg-purple-800 transition duration-300"
        >
          Ganhos
        </button>
        <button
          onClick={() => handleNavigate('/relatorio')}
          className="w-full bg-purple-900 text-white rounded-full py-3 hover:bg-purple-800 transition duration-300"
        >
          Relatório
        </button>
      </div>
    </div>
  );
};

export default ProfileContainer;

