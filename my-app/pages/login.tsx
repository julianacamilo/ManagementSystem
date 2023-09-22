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
      <p className="text-1x1 mt-4">Acesse sua conta agora mesmo </p>
      <p className="text-1x2 mt-4"> Experimente organizar sua vida financeira <br /> conosco. </p>
    </div>
    <div className="w-1/2 p-6 bg-white">
        <h2 className="text-2xl font-semibold">LOGIN </h2>
        <input className="w-full mt-2 p-2 border border-gray-300 rounded" type="text" placeholder='Email' />
        <input className="w-full mt-2 p-2 border border-gray-300 rounded" type="password" placeholder='Senha' />
        <p className="mt-2">Esqueci minha senha</p>
        <button className="w-full px-4 py-2 mt-4 bg-purple-600 text-white rounded-full text-lg cursor-pointer">Entrar</button>
      </div>
    </div>
    <Footer />
    </div>
  );
}
export default Login;