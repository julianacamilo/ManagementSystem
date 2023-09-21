
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
        backgroundImage: `url('https://uploads-ssl.webflow.com/62e3fabbeaf139827d08e4a3/62e3fabbeaf1390f6f08ea6c_shutterstock_1357509185-Converted.png')`, // Coloque a URL entre aspas
        backgroundSize: 'cover', // Ajuste o tamanho da imagem ao contêiner
        backgroundPosition: 'center', // Centralize a imagem horizontalmente e verticalmente
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
