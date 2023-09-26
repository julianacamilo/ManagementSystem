"use client";
import Footer from '@/components/footer';
import Header from '@/components/head';
import axios from 'axios';
import { useRouter } from 'next/navigation'; 
import { useState } from 'react';

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
          backgroundImage: `url('https://agilize.com.br/blog/wp-content/uploads/2022/10/AG-17.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-1/3 p-6 bg-purple-600 text-white">
          <h2 className="text-3xl font-semibold">FINANÇAS</h2>
          <h3 className="text-2xl mt-4">Bem-vindo de volta!</h3>
          <p className="text-2x1 mt-4">Acesse sua conta <br/> agora mesmo</p>
          <button
            className="px-4 py-2 mt-4 bg-purple-700 text-white rounded-full text-lg cursor-pointer"
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