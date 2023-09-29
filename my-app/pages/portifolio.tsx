import Footer from '@/components/footer';
import HeaderP from '@/components/header';
import React from 'react';
const investments = [
    { name: 'Ações da minha empresa', investedAmount: 5000, performance: 10 },
    { name: 'Títulos do Governo', investedAmount: 10000, performance: -5 },
    { name: 'Fundos de Investimento', investedAmount: 7500, performance: 2 },
    { name: 'Investimento em Imóveis', investedAmount: 15000, performance: 7 },
    { name: 'Poupança', investedAmount: 2000, performance: 1 },
    { name: 'Ações de Tecnologia', investedAmount: 8000, performance: 12 },
    { name: 'Criptomoedas', investedAmount: 6000, performance: 15 },
    { name: 'Títulos Corporativos', investedAmount: 9000, performance: 3 },
    { name: 'Investimento em Ouro', investedAmount: 12000, performance: 8 },
    { name: 'Fundos de Pensão', investedAmount: 9500, performance: 4 },
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

const Investimentos: React.FC = () => {
  const handleAdicionarInvestimentoClick = () => {
    // Redirecionar para a página de investimentos
    window.location.href = 'http://localhost:3000/investimentos';
  };

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
            ))}<br></br>
          </div>
          <button
            className="w-full bg-purple-700 text-white rounded-full py-2 hover:bg-purple-800"
            onClick={handleAdicionarInvestimentoClick} 
          >
            Voltar
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Investimentos;
