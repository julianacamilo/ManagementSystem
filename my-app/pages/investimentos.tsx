import Footer from '@/components/footer';
import HeaderP from '@/components/header';
import React from 'react';

const investments = [
  { name: 'Ações da minha empresa', investedAmount: 5000, performance: 10 },
  { name: 'Títulos do Governo', investedAmount: 10000, performance: -5 },
  { name: 'Fundos de Investimento', investedAmount: 7500, performance: 2 },
];

function classifyInvestment(performance: number): string {
  if (performance > 5) {
    return 'Bom investimento';
  } else if (performance > 0) {
    return 'Investimento aceitável';
  } else {
    return 'Péssimo investimento';
  }
}

const handleVerInvestimentosClick = () => {
  // Abrir a URL em uma nova guia ou janela do navegador
  window.open('http://localhost:3000/portifolio', '_blank');
};

const Investimentos: React.FC = () => {
  return (
    <div className="">
      <HeaderP />
      <div
        className="bg-gray-100 min-h-screen flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url('https://files.sunoresearch.com.br/p/uploads/2018/08/empresas-de-investimento-800x450.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col md:flex-row md:space-x-4 mx-auto">
          <div className="md:w-1/2 bg-white p-6 rounded-md shadow-md mt-4">
            <h1 className="text-2xl text-purple-600 font-semibold mb-4">
              Adicione aqui <br /> Seu Investimento
            </h1>
            <p className="text-1x1 mt-20"> Receba feedback dos seus investimentos </p>
            <div className="mb-4">
              <label htmlFor="category" className="block text-purple-600 font-bold mb-4">
                Categoria:
              </label>
              <input
                type="text"
                id="category"
                name="category"
                placeholder="Categoria"
                className="w-full border rounded-md py-2 px-3 text-purple-600 focus:outline-none focus:border-purple-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-purple-600 font-bold mb-2">
                Descrição:
              </label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Descrição"
                className="w-full border rounded-md py-2 px-3 text-purple-600 focus:outline-none focus:border-purple-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-purple-600 font-bold mb-2">
                Valor:
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                placeholder="Valor"
                className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-purple-700 mb-4"
              />
            </div>
            <button
              className="w-full bg-purple-700 text-white rounded-full py-2 hover:bg-purple-800"
              onClick={handleVerInvestimentosClick}
            >
              Adicionar Investimento
              
            </button>
            <button
              className="w-full bg-purple-700 text-white rounded-full py-2 mt-4 hover:bg-purple-800"
              onClick={handleVerInvestimentosClick}
            >
              Ver Investimentos
            </button>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded-md shadow-md mt-4">
            <h1 className="text-2xl text-purple-600 font-semibold mb-4">Seu Portfólio de Investimentos</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {investments.map((investment, index) => (
                <div key={index} className="border p-4 rounded-md shadow-md">
                  <h2 className="text-lg font-semibold">{investment.name}</h2>
                  <p>Valor Investido: R$ {investment.investedAmount.toFixed(2)}</p>
                  <p>Desempenho: {investment.performance}%</p>
                  <p>Classificação: {classifyInvestment(investment.performance)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div />
        <div />
      </div>
      <div />
      <Footer />
    </div>
  );
};

export default Investimentos;
