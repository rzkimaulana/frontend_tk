import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/x2.jpg"; // Gambar latar
import { useDispatch } from "react-redux";
import { login } from "../store/actions/authAction";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // Untuk menyimpan pesan error
  const [isLoading, setIsLoading] = useState(false); // Indikator loading

  // Mengatur nilai input form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Mengirim data login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Mulai loading
    setErrorMessage(""); // Reset error message sebelum login

    try {
      const response = await dispatch(login(formData.email, formData.password)); // Dispatch login action
      if (response.success) {
        navigate("/datasiswa"); // Arahkan ke halaman Data Siswa jika login sukses
      } else {
        setErrorMessage(response.message || "Login gagal. Periksa kembali email dan password Anda.");
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Terjadi kesalahan saat login. Coba lagi nanti.";
      setErrorMessage(errorMsg); // Tampilkan error dari server atau fallback message
    } finally {
      setIsLoading(false); // Selesai loading
    }
  };

  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Mengisi seluruh area dengan gambar
        backgroundPosition: "center", // Memastikan gambar terpusat
      }}
    >
      <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md opacity-90">
        <h2 className="text-3xl font-bold mb-6 text-center">Login Admin</h2>
        
        {/* Menampilkan pesan error jika ada */}
        {errorMessage && (
          <div className="bg-red-500 text-white p-2 rounded-lg mb-4">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Input Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border rounded-lg"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Input Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block font-semibold text-lg mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 border rounded-lg"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Tombol Login */}
          <button
            type="submit"
            className={`w-full text-white p-3 rounded-lg ${
              isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
