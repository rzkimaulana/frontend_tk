import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  // Cek token saat komponen dimuat
  useEffect(() => {
    const userToken = localStorage.getItem("token");
    setToken(userToken);
  }, []);

  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Hapus token dari localStorage
    setToken(null); // Perbarui state token menjadi null
    navigate("/"); // Arahkan ke halaman beranda setelah logout
  };

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

        {/* Ganti "Admin" menjadi "Logout" jika token ada */}
        {token ? (
          <button onClick={handleLogout} className="hover:text-gray-300">
            Logout
          </button>
        ) : (
          <Link to="/admin" className="hover:text-gray-300">Admin</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
