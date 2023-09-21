
import Footer from '@/components/footer';
import Header from '@/components/head';
import 'tailwindcss/tailwind.css';

const ExpensesPage = () => {
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
            <label htmlFor="date" className="block text-purple-600 font-bold mb-2">
              Data:
            </label>
            <input
              type="date"
              id="date"
              name="date"
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
