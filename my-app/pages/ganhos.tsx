import Footer from '@/components/footer';

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import HeaderP from '@/components/header';

const Ganhos = () => {
const initialIncome = {
description: '',
amount: '',
date: '',
};

const [income, setIncome] = useState(initialIncome);
const router = useRouter();
const handleChange = (e: { target: { name: any; value: any; }; }) => {
const { name, value } = e.target;
setIncome({
...income,
[name]: value,
});
};

const handleSubmit = () => {
console.log(income);

setIncome(initialIncome);
router.push('/relatorio');
};

return (
    <div>
    <HeaderP />
    <div
    className="bg-gray-100 min-h-screen flex flex-col justify-center items-center"
    style={{
    backgroundImage: `url(https://roxceramica.com.br/uploads/produtos/imagens//RXAR%2072732%20-%20CINZA%20REAL%20ACETINADO%20-BAIXA.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    }}
    >
    <div className="container mx-auto px-4">
    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row">
    <div className="md:w-1/2 flex-grow">
    <div className="max-w-screen-sm mx-auto bg-white p-6 rounded-md shadow-md mt-4 w-full">
    <h1 className="text-1xl text-purple-600 font-semibold mb-4">
    Adicione seus ganhos mensais, gerencie assim seu financeiro!
    </h1>
    <div
    className="image-and-text"
    style={{
    backgroundImage: `url('https://img.freepik.com/vetores-premium/mulher-ilustrada-com-graficos-de-analise-do-mercado-de-acoes_23-2148619248.jpg?w=2000')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '290px',
    }}
    >
    <p></p>
    </div>
    </div>
    </div>
    <div className="md:w-1/2 flex-grow">
    <div className="max-w-screen-sm mx-auto flex flex-col items-center">
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-4 w-full">
    <h1 className="text-2xl text-purple-600 font-semibold mb-4">Renda Mensal</h1>

    <div className="mb-4">
    <label htmlFor="description" className="block text-purple-600 font-bold mb-1">
    Descrição:
    </label>
    <input
    type="text"
    id="description"
    name="description"
    placeholder="Descrição"
    className="w-full border rounded-md py-2 px-3 text-purple-600 focus:outline-none focus:border-purple-700"
    value={income.description}
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
    value={income.amount}
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
    value={income.date}
    onChange={handleChange}
    />
    </div>

    <button
    className="w-full bg-purple-700 text-white rounded-full py-2 hover:bg-purple-800"
    onClick={handleSubmit}
    >
    Adicionar Valor
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

    export default Ganhos;