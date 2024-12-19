import x2 from "../assets/x2.jpg"; // Ganti dengan path gambar Anda

const VisiMisi = () => {
  return (
    <section
      className="py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${x2})` }}
    >
      <div className="container mx-auto px-10 lg:px-24 bg-white bg-opacity-95 rounded-3xl shadow-xl py-14">
        {/* Header */}
        <h3 className="text-5xl font-bold text-blue-800 text-center mb-14">
          Visi dan Misi
        </h3>

        {/* Konten Visi dan Misi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Visi */}
          <div className="relative bg-gradient-to-br from-blue-50 to-white shadow-xl rounded-2xl p-10 hover:shadow-2xl transition duration-300">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-400 rounded-full border-4 border-white"></div>
            <h4 className="text-3xl font-semibold text-blue-700 mb-6 flex items-center">
              <span className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full mr-5">
                V
              </span>
              Visi
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Menjadi taman kanak-kanak yang unggul dalam pembentukan karakter,
              kreativitas, dan kecerdasan anak usia dini melalui pendekatan pembelajaran
              yang menyenangkan.
            </p>
          </div>

          {/* Misi */}
          <div className="relative bg-gradient-to-br from-green-50 to-white shadow-xl rounded-2xl p-10 hover:shadow-2xl transition duration-300">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-400 rounded-full border-4 border-white"></div>
            <h4 className="text-3xl font-semibold text-green-700 mb-6 flex items-center">
              <span className="w-10 h-10 bg-green-600 text-white flex items-center justify-center rounded-full mr-5">
                M
              </span>
              Misi
            </h4>
            <ul className="list-disc ml-8 space-y-4 text-gray-700">
              <li>Mengembangkan potensi anak melalui aktivitas bermain dan belajar.</li>
              <li>Mendorong kemandirian, kejujuran, dan kedisiplinan anak sejak dini.</li>
              <li>Menumbuhkan kreativitas melalui kegiatan seni, musik, dan budaya.</li>
              <li>Mengajarkan nilai-nilai moral dan spiritual sesuai dengan usia anak.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
