
import Footer from '@/components/footer';
import Header from '@/components/head';
import React from 'react';
import 'tailwindcss/tailwind.css';

const Login = () => {
  return (
   <div className=""
   >
    <Header />
    <div className="flex justify-center items-center min-h-screen bg-gray-100"
     style={{
      backgroundImage: `url('https://agilize.com.br/blog/wp-content/uploads/2022/10/AG-17.png')`, // 
      backgroundSize: 'cover',
      backgroundPosition: 'center', 
    }}>
    <div className="w-1/4 p-6 bg-purple-600 text-white">
      <h2 className="text-3xl font-semibold">FINANÇAS</h2>
      <h3 className="text-2xl mt-4">Bem-vindo <br /> de volta!</h3>
      <p className="text-1x1 mt-4">Acesse sua conta agora <br /> mesmo </p>
      <p className="text-1x2 mt-4"> Experimente organizar sua vida financeira <br /> conosco. </p>
    </div>

    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold mb-4">LOGIN</h3>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3"
          type="text"
          placeholder="Email"
        />
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3"
          type="password"
          placeholder="Senha"
        />
        <p className="text-sm text-gray-500 mb-4">ESQUECI MINHA SENHA</p>
        <button
          className="w-full bg-purple-600 text-white rounded-full py-2 hover:bg-purple-700">
   ENTRAR
        </button>
      </div>
    </div>
    </div>
    <Footer />
    </div>
  );
}
export default Login;