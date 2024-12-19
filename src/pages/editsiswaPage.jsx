import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSiswaById, updateSiswa } from "../store/actions/siswaAction";

const EditSiswaPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { siswa, loading, error } = useSelector(
    (state) => state.getSiswaReducer
  );

  const [formData, setFormData] = useState({
    nama: "",
    tempatlahir: "",
    tanggallahir: "",
    alamat: "",
    jeniskelamin: "",
    namaorangtua: "",
    nohp: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(getSiswaById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (siswa) {
      setFormData({
        nama: siswa.nama || "",
        tempatlahir: siswa.tempatlahir || "",
        tanggallahir: siswa.tanggallahir || "",
        alamat: siswa.alamat || "",
        jeniskelamin: siswa.jeniskelamin || "",
        namaorangtua: siswa.namaorangtua || "",
        nohp: siswa.nohp || "",
      });
    }
  }, [siswa]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(updateSiswa(id, formData));
      if (result?.status) {
        navigate("/datasiswa");
      }
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Data Siswa</h1>

      {loading && <p>Loading data siswa...</p>}

      {error && <p className="text-red-500">Terjadi Kesalahan: {error}</p>}

      {!loading && !error && siswa && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="nama"
              className="block text-sm font-medium text-gray-700"
            >
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Masukkan Nama Anak"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="tempatlahir"
              className="block text-sm font-medium text-gray-700"
            >
              Tempat Lahir
            </label>
            <input
              type="text"
              id="tempatlahir"
              name="tempatlahir"
              value={formData.tempatlahir}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Masukkan Tempat Lahir"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="tanggallahir"
              className="block text-sm font-medium text-gray-700"
            >
              Tanggal Lahir
            </label>
            <input
              type="date"
              id="tanggallahir"
              name="tanggallahir"
              value={formData.tanggallahir}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="alamat"
              className="block text-sm font-medium text-gray-700"
            >
              Alamat
            </label>
            <textarea
              id="alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Masukkan Alamat"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="jeniskelamin"
              className="block text-sm font-medium text-gray-700"
            >
              Jenis Kelamin
            </label>
            <select
              id="jeniskelamin"
              name="jeniskelamin"
              value={formData.jeniskelamin}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
              required
            >
              <option value="" disabled>
                Pilih Jenis Kelamin
              </option>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="namaorangtua"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Orang Tua
            </label>
            <input
              type="text"
              id="namaorangtua"
              name="namaorangtua"
              value={formData.namaorangtua}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Masukkan Nama Orang Tua"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="nohp"
              className="block text-sm font-medium text-gray-700"
            >
              Nomor HP
            </label>
            <input
              type="tel"
              id="nohp"
              name="nohp"
              value={formData.nohp}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded"
              pattern="[0-9]*"
              placeholder="Masukkan Nomor HP"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg"
            >
              Update Data
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default EditSiswaPage;
