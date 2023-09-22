
import ProfileContainer from '@/components/Profile/ProfileContainer';
import Footer from '@/components/footer';
import Header from '@/components/head';
import 'tailwindcss/tailwind.css';

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen p-4 grid place-items-center"
      style={{
        backgroundImage: `url('https://www.serasaexperian.com.br/images-cms/wp-content/uploads/2023/07/quer-cortar-despesas-em-sua-empresa-saiba-por-onde-comecar-1.jpeg')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }}>
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mb-4">
          <h1 className="text-2xl font-semibold  text-purple-600">Meu Perfil</h1>
        </div>

      <ProfileContainer/>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
