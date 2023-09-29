import React, { useState } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/head';
import { useRouter } from 'next/router';

const Metas: React.FC = () => {
  const initialMeta = {
    category: 'Outro',
    description: '',
    amount: '',
  };
  const router = useRouter();
  const [meta, setMeta] = useState(initialMeta);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setMeta({
      ...meta,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(meta); // Handle form data here

    setMeta(initialMeta);
    router.push('/relatorio');
  };

  return (
    <div>
      <Header />
      <div
          className="bg-gray-100 min-h-screen flex flex-col justify-center items-center px-4"
        style={{
          backgroundImage: `url(https://roxceramica.com.br/uploads/produtos/imagens//RXAR%2072732%20-%20CINZA%20REAL%20ACETINADO%20-BAIXA.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto flex justify-center items-center h-screen">
          <div className="flex flex-col w-full md:flex-row">
            <div className="md:w-1/2">
              <div className="max-w-screen-sm mx-auto bg-white p-6 rounded-md shadow-md mt-4 w-full">
                <h1 className="text-2xl text-purple-600 font-semibold mb-4">
                  Adicione metas para suas despesas e receba alertas <br /> caso elas ultrapassem!
                </h1>
                <div
                  className="image-and-text"
                  style={{
                    backgroundImage: `url('https://dindimpordindim.com.br/wp-content/uploads/2018/11/shutterstock_1126057424-1.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '225px',
                  }}
                >
                  <p></p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="max-w-screen-sm mx-auto flex flex-col items-center">
                <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-4 w-full">
                  <h1 className="text-3xl text-purple-600 font-semibold mb-2">Metas De Orçamento</h1>
              

                  <div className="mb-2">
                    <label htmlFor="category" className="block text-purple-600 font-bold mb-2">
                      Categoria:
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="w-full border rounded-md py-2 px-3 text-purple-600 focus:outline-none focus:border-purple-700"
                      value={meta.category}
                      onChange={handleChange}
                    >
                      <option value="Outro">Outro</option>
                      <option value="Alimentação">Alimentação</option>
                      <option value="Lazer">Lazer</option>
                      <option value="Água">Água</option>
                      <option value="Luz">Luz</option>
                      <option value="Transporte">Transporte</option>
                      <option value="Aluguel">Aluguel</option>
                      <option value="Entretenimento">Entretenimento</option>
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
                      value={meta.description}
                      onChange={handleChange}
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
                      value={meta.amount}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    className="w-full bg-purple-700 text-white rounded-full py-2 hover:bg-purple-800"
                    onClick={handleSubmit}
                  >
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