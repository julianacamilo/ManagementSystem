import React from 'react';
import Footer from '@/components/footer';
import Header from '@/components/head';

const Metas: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="bg-purple-500 min-h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto flex justify-center items-center h-screen">
          <div className="flex space-x-4">
          
            <div className="w-1/2">
              <div className="max-w-screen-sm mx-auto bg-white p-6 rounded-md shadow-md mt-4 w-full">
                <h1 className="text-2xl text-purple-600 font-semibold mb-4">Adicione metas  para  suas despesas  e receba alertas <br/> caso elas ultrapassem!</h1>
                <div
                  className="image-and-text"
                  style={{
                    backgroundImage: `url('https://dindimpordindim.com.br/wp-content/uploads/2018/11/shutterstock_1126057424-1.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px', 
                  }}
                >
                  <p></p>
                </div>
              </div>
            </div>
          <div className="w-1/2">
                
      <div className="max-w-screen-sm mx-auto flex flex-col items-center">

<div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-4 w-full">
  <h1 className="text-2xl text-purple-600 font-semibold mb-4">Metas De <br/> Orçamento</h1>
  <div className="mb-4">
    <label htmlFor="category" className="block text-purple-600 font-bold mb-2">
      Categoria:
    </label>
    <select
      id="category"
      name="category"
      className="w-full border rounded-md py-2 px-3 text-purple-600 focus:outline-none focus:border-purple-700"
    >
      <option value="alimentacao">Outro</option>
      <option value="alimentacao">Alimentação</option>
      <option value="alimentacao">Lazer</option>
      <option value="alimentacao">Água</option>
      <option value="alimentacao">Luz</option>
      <option value="transporte">Transporte</option>
      <option value="moradia">Aluguel</option>
      <option value="entretenimento">Entretenimento</option>
    
    </select>
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
    className="w-full bg-purple-700 text-white rounded-full py-2 hover:bg-purple-800">
    Adicionar Meta
  </button>
</div>
</div>
</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Metas;
