import guru1 from "../assets/guru1.jpg";
import guru2 from "../assets/guru2.jpg";
import guru3 from "../assets/guru3.jpg";
import x2 from "../assets/x2.jpg"; // Ganti dengan path gambar Anda

const Staff = () => {
  const staffMembers = [
    {
      name: "Ibu Euis",
      role: "Kepala Sekolah",
      photo: guru1,
    },
    {
      name: "Ibu Anggi",
      role: "Guru Kelas",
      photo: guru2,
    },
    {
      name: "Ibu Isna",
      role: "Bendahara",
      photo: guru3,
    },
  ];

  return (
    <section
      className="py-10 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${x2})` }}
    >
      <div className="container mx-auto text-center bg-white bg-opacity-80 rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-8">Guru dan Kepala Sekolah</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staffMembers.map((staff, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300 relative"
            >
              {/* Bagian gambar dengan elemen dekoratif */}
              <div className="relative">
                <img
                  src={staff.photo}
                  alt={staff.name}
                  className="w-full h-64 object-cover"
                />
                {/* Tambahkan overlay dekoratif */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                {/* Tambahkan elemen label */}
                <div className="absolute top-4 left-4 bg-blue-500 text-white py-1 px-3 rounded-full text-sm font-semibold shadow-md">
                  {staff.role}
                </div>
                {/* Dekorasi tambahan */}
                <div className="absolute bottom-4 right-4 bg-white text-blue-600 py-1 px-3 rounded-full text-xs font-bold border border-blue-500 shadow">
                  Pendidik Hebat
                </div>
              </div>

              {/* Bagian konten kartu */}
              <div className="p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-b-2xl">
                <h3 className="text-lg font-bold text-blue-600 mb-2">{staff.name}</h3>
                <p className="text-gray-600 italic mb-4">{staff.role}</p>
                <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 shadow-md">
                  Lihat Detail
                </button>
              </div>

              {/* Elemen dekoratif tambahan */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-yellow-400 rounded-full border-4 border-white shadow-md"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-pink-400 rounded-full border-4 border-white shadow-md"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;
