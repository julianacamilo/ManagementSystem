import Footer from '@/components/footer'
import Header from '@/components/head'
import React from 'react'

const ganhos = () => {
  return (
    <div>
    <Header />
    <div className="bg-purple-700 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto flex justify-center items-center h-screen">
        <div className="flex space-x-5">
        
          <div className="w-1/2">
            <div className="max-w-screen-sm mx-auto bg-white p-6 rounded-md shadow-md mt-4 w-full">
              <h1 className="text-2x1 text-purple-600 font-semibold mb-4">Adicione seus ganhos mensais <br/> e assim gerencie seu financeiro!</h1>
              <div
                className="image-and-text"
                style={{
                  backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnrvikVqXDGz4pfhKpuq2FexSpB1eD4mMKQ&usqp=CAU')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '320px', 
                }}
              >
                <p></p>
              </div>
            </div>
          </div>
        <div className="w-1/2">
              
    <div className="max-w-screen-sm mx-auto flex flex-col items-center">

<div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-4 w-full">
<h1 className="text-2xl text-purple-600 font-semibold mb-4">Renda <br/> Mensal </h1>

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
<button
  className="w-full bg-purple-700 text-white rounded-full py-2 hover:bg-purple-800">
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
  )
}

export default ganhos