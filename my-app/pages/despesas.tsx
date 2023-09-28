import React, { useState } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/head';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router'; 
const ExpensesPage = () => {
  const initialExpense = {
    category: 'Outro',
    description: '',
    date: '',
    amount: '',
  };

  const router = useRouter(); 
  const [expense, setExpense] = useState(initialExpense);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setExpense({
      ...expense,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(expense);

    
    setExpense(initialExpense);
    router.push('/relatorio'); 
  };

  return (
    <div>
      <Header />
      <div
        className="bg-gray-100 min-h-screen flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url('https://agilize.com.br/blog/wp-content/uploads/2022/10/AG-17.png')`, // 
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
        }}
      >
        <div className="max-w-screen-sm mx-auto flex flex-col items-center">
          <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-4 w-full">
            <h1 className="text-2xl text-purple-600 font-semibold mb-4">Despesas</h1>
            <div className="mb-4">
              <label htmlFor="category" className="block text-purple-600 font-bold mb-2">
                Categoria:
              </label>
              <select
                id="category"
                name="category"
                className="w-full border rounded-md py-2 px-3 text-purple-600 focus:outline-none focus:border-purple-700"
                value={expense.category}
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
                value={expense.description}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-purple-600 font-bold mb-2">
                Data:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full border rounded-md py-2 px-3 text-purple-600 focus:outline-none focus:border-purple-700"
                value={expense.date}
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
                value={expense.amount}
                onChange={handleChange}
              />
            </div>
            <button
              className="w-full bg-purple-700 text-white rounded-full py-2 hover:bg-purple-800"
              onClick={handleSubmit}
            >
              Adicionar Despesa
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExpensesPage;
