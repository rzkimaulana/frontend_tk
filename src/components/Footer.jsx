import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const phoneNumber = "6282260668073"; // Ganti dengan nomor yang dituju
  const message = encodeURIComponent("Halo, saya ingin bertanya tentang pendaftaran di TK Insan Prestasi."); // Isi pesan otomatis

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2024 Sekolah Taman Kanak-Kanak</p>
        <p className="text-sm">Dibuat oleh Rizki Maulana</p>
        <a
          href={`https://wa.me/${phoneNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-green-400 hover:underline flex items-center gap-2"
        >
          <FaWhatsapp className="text-lg" />
          Hubungi Kami
        </a>
      </div>
    </footer>
  );
};

export default Footer;
