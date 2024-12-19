import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createSiswa } from "../store/actions/siswaAction";
import backgroundImage from "../assets/x2.jpg"; // Gambar background

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State untuk data formulir
  const [formData, setFormData] = useState({
    nama: "",
    tempatlahir: "",
    tanggallahir: "",
    alamat: "",
    jeniskelamin: "",
    namaorangtua: "",
    nohp: "",
  });

  // State untuk status berhasil atau gagal
  const [isSuccess, setIsSuccess] = useState(null); // null -> tidak ada status, true -> sukses, false -> gagal

  // Mengatur nilai input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Mengirim formulir
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await dispatch(createSiswa(formData)); // Mengirim data siswa

      if (result.status) {
        console.log("Pendaftaran berhasil:", result.message);
        setIsSuccess(true); // Menandakan pendaftaran berhasil
        navigate("/pendaftaran"); // Arahkan ke halaman lain setelah berhasil
      } else {
        console.error("Gagal mendaftar:", result.message || result.error);
        setIsSuccess(false); // Menandakan pendaftaran gagal
      }
    } catch (error) {
      console.error("Error saat pendaftaran:", error);
      setIsSuccess(false); // Menandakan pendaftaran gagal
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Gambar sebagai background
      }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          Formulir Pendaftaran
        </h2>

        {/* Menampilkan pesan sukses atau error */}
        {isSuccess !== null && (
          <div
            className={`text-center p-4 mb-6 rounded-lg ${
              isSuccess ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            {isSuccess ? "Pendaftaran Berhasil!" : "Pendaftaran Gagal. Coba lagi."}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Fields */}
          <div className="flex items-center space-x-6">
            <label htmlFor="nama" className="w-48 font-semibold text-right text-black">
              Nama:
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              className="w-full border rounded-lg px-6 py-3 text-lg"
              placeholder="Masukkan Nama Anak"
              value={formData.nama}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Tempat Lahir */}
          <div className="flex items-center space-x-6">
            <label htmlFor="tempatlahir" className="w-48 font-semibold text-right text-black">
              Tempat Lahir:
            </label>
            <input
              type="text"
              id="tempatlahir"
              name="tempatlahir"
              className="w-full border rounded-lg px-6 py-3 text-lg"
              placeholder="Masukkan Tempat Lahir"
              value={formData.tempatlahir}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Tanggal Lahir */}
          <div className="flex items-center space-x-6">
            <label htmlFor="tanggallahir" className="w-48 font-semibold text-right text-black">
              Tanggal Lahir:
            </label>
            <input
              type="date"
              id="tanggallahir"
              name="tanggallahir"
              className="w-full border rounded-lg px-6 py-3 text-lg"
              value={formData.tanggallahir}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Alamat */}
          <div className="flex items-center space-x-6">
            <label htmlFor="alamat" className="w-48 font-semibold text-right text-black">
              Alamat:
            </label>
            <textarea
              id="alamat"
              name="alamat"
              className="w-full border rounded-lg px-6 py-3 text-lg"
              placeholder="Masukkan Alamat"
              value={formData.alamat}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          {/* Jenis Kelamin */}
          <div className="flex items-center space-x-6">
            <label htmlFor="jeniskelamin" className="w-48 font-semibold text-right text-black">
              Jenis Kelamin:
            </label>
            <select
              id="jeniskelamin"
              name="jeniskelamin"
              className="w-full border rounded-lg px-6 py-3 text-lg"
              value={formData.jeniskelamin}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Pilih Jenis Kelamin
              </option>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>
          {/* Nama Orang Tua */}
          <div className="flex items-center space-x-6">
            <label htmlFor="namaorangtua" className="w-48 font-semibold text-right text-black">
              Nama Orang Tua:
            </label>
            <input
              type="text"
              id="namaorangtua"
              name="namaorangtua"
              className="w-full border rounded-lg px-6 py-3 text-lg"
              placeholder="Masukkan Nama Orang Tua"
              value={formData.namaorangtua}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Nomor HP */}
          <div className="flex items-center space-x-6">
            <label htmlFor="nohp" className="w-48 font-semibold text-right text-black">
              Nomor HP:
            </label>
            <input
              type="tel"
              id="nohp"
              name="nohp"
              className="w-full border rounded-lg px-6 py-3 text-lg"
              placeholder="Masukkan Nomor HP"
              value={formData.nohp}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Tombol Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg"
            >
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
