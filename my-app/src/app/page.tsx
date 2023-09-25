"use client"
import Footer from '@/components/footer';
import Header from '@/components/head';
import { useRouter } from 'next/navigation'; 
import { useState } from 'react'; 

export default function Home() {
  const router = useRouter(); 


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState(''); 

  const handleLoginClick = () => {
    router.push('/login'); 
  };

  const handleRegisterClick = () => {

    setEmailError('');
    setPasswordError('');


    if (!email) {
      setEmailError('Preencha o campo de email.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email inválido. Certifique-se de que contém um "@" e um domínio válido (exemplo: exemplo@gmail.com).');
    }

    
    if (!password) {
      setPasswordError('Preencha o campo de senha.');
    } else if (password.length < 6) {
      setPasswordError('A senha deve ter pelo menos 6 caracteres.');
    }

    if (email && password) {
      router.push('/login'); 
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
          <h3 className="text-2xl mt-2">
            Bem-vindo <br /> de volta!
          </h3>
          <p className="text-sm mt-4">
            Acesse sua conta agora <br /> mesmo
          </p>
          <button
            className="px-4 py-2 mt-4 bg-purple-700 text-white rounded-full text-lg cursor-pointer"
            onClick={handleLoginClick}
          >
            ENTRAR
          </button>
          <p className="text-sm mt-4">Esqueci minha <br /> senha</p>
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
          {emailError && <span className="text-purple-600">{emailError}</span>} 
          <input
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <span className="text-purple-600">{passwordError}</span>} 
          <button
            className="w-full px-4 py-2 mt-4 bg-purple-600 text-white rounded-full text-lg cursor-pointer"
            onClick={handleRegisterClick}
          >
            Cadastrar
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
