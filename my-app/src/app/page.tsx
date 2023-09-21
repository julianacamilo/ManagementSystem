import Footer from '@/components/footer';
import Header from '@/components/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
    <div className="flex justify-center items-center min-h-screen bg-gray-100"  style={{
    backgroundImage: `url('https://agilize.com.br/blog/wp-content/uploads/2022/10/AG-17.png')`, // 
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
  }}>
      <div className="w-1/3 p-6 bg-purple-600 text-white">
        <h2 className="text-3xl font-semibold">FINANÇAS</h2>
        <h3 className="text-2xl mt-2">Bem-vindo <br /> de volta!</h3>
        <p className="text-sm mt-4">Acesse sua conta agora <br /> mesmo</p>
        <button className="px-4 py-2 mt-4 bg-purple-700 text-white rounded-full text-lg cursor-pointer">ENTRAR</button>
        <p className="text-sm mt-4">Esqueci minha <br /> senha</p>
      </div>
      <div className="w-1/3 p-6 bg-white">
        <h2 className="text-3xl font-semibold">Crie sua conta</h2>
        <p className="mt-2">Preencha seus dados</p>
        <input className="w-full mt-2 p-2 border border-gray-300 rounded" type="text" placeholder='Nome' />
        <input className="w-full mt-2 p-2 border border-gray-300 rounded" type="text" placeholder='Email' />
        <input className="w-full mt-2 p-2 border border-gray-300 rounded" type="password" placeholder='Senha' />
        <button className="w-full px-4 py-2 mt-4 bg-purple-600 text-white rounded-full text-lg cursor-pointer">Cadastrar</button>
      </div>
    </div>
    <Footer />
    </div>
  )
}
