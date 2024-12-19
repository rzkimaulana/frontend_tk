import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-2" />
        <h1 className="text-lg font-bold">Sekolah Taman Kanak-Kanak</h1>
      </div>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Beranda</Link>
        <Link to="/tentang" className="hover:text-gray-300">Tentang</Link>
        <Link to="/galeri" className="hover:text-gray-300">Galeri</Link>
        <Link to="/pertanyaan" className="hover:text-gray-300">Pertanyaan</Link>
        <Link to="/pendaftaran" className="hover:text-gray-300">Pendaftaran</Link>
        
        
      </nav>
    </header>
  );
};

export default Header;
