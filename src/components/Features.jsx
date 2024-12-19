import { useState, useEffect } from "react";
import kegiatan1 from "../assets/kegiatan1.png"; // Gambar pertama
import kegiatan2 from "../assets/kegiatan2.png"; // Gambar kedua
import anak13 from "../assets/anak13.jpg"; // Gambar ketiga
import anak14 from "../assets/anak14.jpg"; // Gambar ketiga
import x2 from "../assets/x2.jpg"; // Background gambar

const Features = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Indeks gambar saat ini
  const [direction, setDirection] = useState("next"); // Arah animasi
  const images = [kegiatan1, kegiatan2, anak13, anak14]; // Daftar gambar

  // Efek untuk animasi otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("next");
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval); // Membersihkan interval saat unmount
  }, [images.length]);

  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${x2})` }}
    >
      <div className="container mx-auto bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-lg p-10">
        {/* Header */}
        <h3 className="text-3xl font-extrabold text-blue-700 text-center mb-12">
          Selamat Datang di TK Unggulan Insan Prestasi Muaro Jambi
        </h3>
        
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10">
          {/* Bagian Penjelasan */}
          <div className="flex-1 space-y-8">
            <div>
              <h4 className="text-xl font-bold text-blue-600">Pembelajaran Interaktif</h4>
              <p className="text-gray-700">
                Menggunakan metode bermain sambil belajar untuk mengembangkan
                keterampilan kognitif, sosial, dan emosional anak.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-blue-600">Lingkungan Ramah Anak</h4>
              <p className="text-gray-700">
                Area bermain yang luas dan fasilitas pendidikan yang modern
                untuk menunjang eksplorasi dan kreativitas.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-blue-600">Program Pengembangan Karakter</h4>
              <p className="text-gray-700">
                Berfokus pada nilai-nilai positif seperti disiplin, tanggung
                jawab, dan rasa hormat.
              </p>
            </div>
            
          </div>

          {/* Bagian Slider Gambar */}
          <div className="flex-1 relative overflow-hidden h-72 rounded-lg shadow-md">
            <div className="relative w-full h-full">
              {/* Gambar */}
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Kegiatan ${index + 1}`}
                  className={`absolute w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out ${
                    index === currentImageIndex
                      ? "translate-x-0"
                      : direction === "next"
                      ? "translate-x-full"
                      : "-translate-x-full"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
