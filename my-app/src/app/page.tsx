"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Header from '@/components/head';
import Footer from '@/components/footer';

const Register = () => {
  const router = useRouter(); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerError, setRegisterError] = useState('');

  
  const handleLoginClick = () => {
    router.push('/login'); 
  };
  const handleRegister = async () => {
    setRegisterError(''); 

    if (!name) {
      setRegisterError('Preencha o campo de nome.');
      return;
    }

    if (!email) {
      setRegisterError('Preencha o campo de email.');
      return;
    }

    if (!password) {
      setRegisterError('Preencha o campo de senha.');
      return;
    }

   

    try {
      const response = await axios.post('http://localhost:3001/register', {
        name,
        email,
        password,
      });

      if (response.status === 200) {
     
        console.log('Registro bem-sucedido');
        router.push('/login'); 
      } else {
        setRegisterError('Erro no registro');
      }
    } catch (error) {
      console.error('Erro ao fazer registro:', error);
      setRegisterError('Erro ao fazer registro');
    }
  };
  return (
    <div>
      <Header />
      <div
        className="flex justify-center items-center min-h-screen bg-gray-100"
        style={{
          backgroundImage: url('https://img.freepik.com/fotos-premium/grafico-de-crescimento-financeiro-disponivel-os-empresarios-estao-documentando-financas-de-escritorios-ideias-financeiras-e-investimentos-em-emprestimos_104677-78.jpg'),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-full md:max-w-screen-md p-6 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 bg-purple-600 text-white p-6 text-center md:text-left">
            <h2 className="text-4xl font-semibold">FINANÇAS</h2>
            <h3 className="text-3xl mt-4">Olá, Bem-vindo</h3>
            <p className="text-2xl mt-4">Acesse sua conta agora mesmo</p>
            <button
              className="px-4 py-2 mt-5 bg-purple-700 text-white rounded-full text-lg cursor-pointer"
              onClick={handleLoginClick}
              >
            ENTRAR
          </button>
          <p className="text-1x2 mt-4">Esqueci minha <br /> senha</p>
        </div>
        <div className="w-1/3 p-6 bg-white">
          <h2 className="text-3xl font-semibold">Crie sua conta</h2>
          <p className="mt-2">Preencha seus dados</p>
          <input
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
    
          <input
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
     
          
          <button
            className="w-full px-4 py-2 mt-4 bg-purple-600 text-white rounded-full text-lg cursor-pointer"
            onClick={handleRegister}
          >
            Cadastrar
          </button>
          {registerError && <p style={{ color: 'red' }}>{registerError}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Register