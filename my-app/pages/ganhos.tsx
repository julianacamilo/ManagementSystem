import Footer from '@/components/footer'
import Header from '@/components/head'
import React from 'react'

const ganhos = () => {
  return (
    <div>
    <Header />
    <div className="bg-purple-500 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto flex justify-center items-center h-screen">
        <div className="flex space-x-5">
        
          <div className="w-1/2">
            <div className="max-w-screen-sm mx-auto bg-white p-6 rounded-md shadow-md mt-4 w-full">
              <h1 className="text-2x1 text-purple-600 font-semibold mb-4">Adicione seus ganhos mensais <br/> e assim gerencie seu financeiro!</h1>
              <div
                className="image-and-text"
                style={{
                  backgroundImage: `url('data:image/png;base64,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')`,
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