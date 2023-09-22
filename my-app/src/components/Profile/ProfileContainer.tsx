import React from 'react';

const ProfileContainer = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="w-1/4 p-6 bg-purple-700 text-center rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-white mb-4">Escolha uma Opção:</h2>
      <button
        className="w-full bg-purple-900 text-white rounded-full py-3 mb-2 hover:bg-purple-800 transition duration-300">
        Minhas Despesas
      </button>
      <button
        className="w-full bg-purple-900 text-white rounded-full py-3 mb-2 hover:bg-purple-800 transition duration-300">
        Metas de Orçamento
      </button>
      <button
        className="w-full bg-purple-900 text-white rounded-full py-3 mb-2 hover:bg-purple-800 transition duration-300">
        Ganhos
      </button>
      <button
        className="w-full bg-purple-900 text-white rounded-full py-3 hover:bg-purple-800 transition duration-300">
        Relatório
      </button>
    </div>
  </div>
  );
};

export default ProfileContainer;
