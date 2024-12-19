const ProfilePage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-blue-50 rounded-lg shadow-md p-6 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Tentang Kami</h2>
        <div className="text-gray-800 leading-relaxed">
          <p className="text-lg">
            TK Insan Prestasi adalah sekolah unggulan yang berkomitmen memberikan pendidikan terbaik untuk anak-anak usia dini. Berdiri sejak tahun 2018, kami fokus pada pengembangan karakter, kreativitas, dan kecerdasan anak-anak.
          </p>
          <div className="mt-6 bg-blue-100 p-4 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-700">Lokasi</h3>
            <p className="text-gray-700 mt-2">Muaro Jambi, Indonesia.</p>
            <h3 className="text-xl font-semibold text-blue-700 mt-4">Hubungi Kami</h3>
            <p className="text-gray-700 mt-2">Untuk informasi lebih lanjut, silakan hubungi kami.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
