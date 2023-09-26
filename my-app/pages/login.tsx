import Footer from '@/components/footer';
import Header from '@/components/head';
import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Importe de 'next/router' em vez de 'next/navigation'
import 'tailwindcss/tailwind.css';
import axios from 'axios';

const Login = () => { 
  const router = useRouter(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');



  const handleLogin = async () => {
    setLoginError(''); // Limpa o erro anterior ao tentar fazer login

    if (!email) {
      setLoginError('Preencha o campo de email.');
      return;
    }

    if (!password) {
      setLoginError('Preencha o campo de senha.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Login bem-sucedido, você pode redirecionar para a página de perfil ou outra página desejada
        console.log('Login bem-sucedido');
        router.push('/profile'); 
      } else {
        setLoginError('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setLoginError('Erro ao fazer login');
    }
  };

  return (
    <div className="">
      <Header />
      <div
        className="flex justify-center items-center min-h-screen bg-gray-100"
        style={{
          backgroundImage: `url('https://agilize.com.br/blog/wp-content/uploads/2022/10/AG-17.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-1/4 p-6 bg-purple-600 text-white">
          <h2 className="text-3xl font-semibold">FINANÇAS</h2>
          <h3 className="text-2xl mt-4">Bem-vindo <br /> de volta!</h3>
          <p className="text-1x1 mt-4">Acesse sua conta agora mesmo </p>
          <p className="text-1x2 mt-4"> Experimente organizar sua vida financeira <br /> conosco. </p>
        </div>

        <div className="w-1/2 p-6 bg-white">
          <h2 className="text-2xl font-semibold">LOGIN </h2>
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

          <p className="mt-2">Esqueci minha senha</p>
          <button
            className="w-full px-4 py-2 mt-4 bg-purple-600 text-white rounded-full text-lg cursor-pointer"
            onClick={handleLogin}
          >
            Entrar
          </button>
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
