import { useState } from "react";
import anak1 from "../assets/anak1.jpg";
import anak2 from "../assets/anak2.jpg";
import anak3 from "../assets/anak3.jpg";
import anak4 from "../assets/anak4.jpg";
import anak5 from "../assets/anak5.jpg";
import anak6 from "../assets/anak6.jpg";
import anak7 from "../assets/anak7.jpg";
import anak8 from "../assets/anak8.jpg";
import anak9 from "../assets/anak9.jpg";
import anak10 from "../assets/anak10.jpg";
import anak11 from "../assets/anak11.jpg";
import anak12 from "../assets/anak12.jpg";
import anak13 from "../assets/anak13.jpg";
import anak14 from "../assets/anak14.jpg";
import anak15 from "../assets/anak15.jpg";
import anak16 from "../assets/anak16.jpg";
import anak17 from "../assets/anak17.jpg";
import anak18 from "../assets/anak18.jpg";
import anak19 from "../assets/anak19.jpg";
import anak20 from "../assets/anak20.jpg";

// Gambar latar belakang
import backgroundImage from "../assets/x2.jpg"; // Sesuaikan dengan path gambar latar belakang yang diinginkan

const images = [
  { src: anak1, category: "Indoor", description: "Anak-anak sedang hormat" },
  { src: anak2, category: "Indoor", description: "Anak-anak sedang berdoa" },
  { src: anak3, category: "Indoor", description: "Anak-anak sedang berdoa" },
  { src: anak4, category: "Indoor", description: "Anak-anak sedang berolahraga" },
  { src: anak5, category: "Indoor", description: "Anak-anak sedang mengaji" },
  { src: anak6, category: "Indoor", description: "Anak-anak sedang mengaji" },
  { src: anak7, category: "Indoor", description: "Anak-anak sedang mengaji" },
  { src: anak8, category: "Indoor", description: "Anak-anak sedang mengaji" },
  { src: anak9, category: "Indoor", description: "Anak-anak sedang mengaji" },
  { src: anak10, category: "Indoor", description: "Anak-anak sedang mengaji" },
  { src: anak11, category: "Indoor", description: "Anak-anak bersama orang tua" },
  { src: anak12, category: "Outdoor", description: "Anak-anak berlomba 17 " },
  { src: anak13, category: "Outdoor", description: "Study Tour Kebun Binatang" },
  { src: anak14, category: "Outdoor", description: "Study Tour Kebun Binatang" },
  { src: anak15, category: "Outdoor", description: "Anak-anak berlomba 17" },
  { src: anak16, category: "Outdoor", description: "Anak-anak berlomba 17" },
  { src: anak17, category: "Outdoor", description: "Anak-anak berlomba 17" },
  { src: anak18, category: "Outdoor", description: "Anak-anak berlomba 17" },
  { src: anak19, category: "Outdoor", description: "Anak-anak berlomba 17" },
  { src: anak20, category: "Outdoor", description: "Anak-anak berlomba 17" },

];

const GalleryPage = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Pencarian berdasarkan deskripsi
  const [selectedCategory, setSelectedCategory] = useState(""); // Filter berdasarkan kategori
  const [selectedImage, setSelectedImage] = useState(null); // Untuk menyimpan gambar yang dipilih

  // Menangani perubahan pada input pencarian
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Menangani perubahan pada dropdown kategori
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter gambar berdasarkan deskripsi dan kategori
  const filteredImages = images.filter((image) => {
    const matchesSearch = image.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? image.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  // Fungsi untuk membuka modal dengan gambar besar
  const openImageModal = (src) => {
    setSelectedImage(src);
  };

  // Fungsi untuk menutup modal
  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div
      className="p-6 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Gambar latar belakang
    >
      {/* Title Section */}
      <h2 className="text-4xl font-extrabold text-black mb-8 text-center">
  Galeri Kegiatan
</h2>


      {/* Filter Box */}
      <div className="flex justify-center gap-4 mb-8">
        {/* Dropdown untuk kategori */}
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Semua Kategori</option>
          <option value="Indoor">didalam kelas</option>
          <option value="Outdoor">diluar kelas</option>
        </select>

        {/* Input untuk pencarian berdasarkan deskripsi */}
        <input
          type="text"
          placeholder="Cari kegiatan..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <img
                src={image.src}
                alt={`Gambar ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => openImageModal(image.src)} // Memanggil fungsi openImageModal saat gambar di klik
              />
              <p className="mt-2 text-center text-gray-700 px-2">{image.description}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">Tidak ada hasil yang ditemukan.</p>
        )}
      </div>

      {/* Modal untuk menampilkan gambar besar */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeImageModal} // Menutup modal saat klik di luar gambar
        >
          <div className="relative bg-white p-4 rounded-lg max-w-4xl">
            <img
              src={selectedImage}
              alt="Gambar Besar"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={closeImageModal}
              className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full hover:bg-red-600"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
