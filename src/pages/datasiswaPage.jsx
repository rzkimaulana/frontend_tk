import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getsiswa, deleteSiswa } from "../store/actions/siswaAction";
import { useNavigate } from "react-router-dom";

const DataSiswaPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  const { siswa, loading, error } = useSelector((state) => state.getSiswaReducer);

  useEffect(() => {
    dispatch(getsiswa());
  }, [dispatch]);

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data siswa ini?")) {
      const result = await dispatch(deleteSiswa(id));
      if (result.status) {
        setSuccessMessage("Data siswa berhasil dihapus.");
        dispatch(getsiswa());
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        alert("Gagal menghapus data siswa");
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-siswa/${id}`);
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Siswa</h1>

      {successMessage && (
        <div className="bg-green-500 text-white p-2 mb-4 rounded">
          {successMessage}
        </div>
      )}

      {loading && <p>Loading data...</p>}
      {error && <p className="text-red-500">Terjadi Kesalahan: {error}</p>}

      {!loading && !error && siswa?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">No</th>
                <th className="border p-2">Nama</th>
                <th className="border p-2">Tempat Lahir</th>
                <th className="border p-2">Tanggal Lahir</th>
                <th className="border p-2">Alamat</th>
                <th className="border p-2">Jenis Kelamin</th>
                <th className="border p-2">Nama Orang Tua</th>
                <th className="border p-2">No HP</th>
                <th className="border p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {siswa.map((item, index) => (
                <tr key={item.id} className="odd:bg-white even:bg-gray-100 text-center">
                  <td className="border p-2 text-center">{index + 1}</td>
                  <td className="border p-2">{item.nama}</td>
                  <td className="border p-2">{item.tempatlahir}</td>
                  <td className="border p-2">{item.tanggallahir}</td>
                  <td className="border p-2">{item.alamat}</td>
                  <td className="border p-2">{item.jeniskelamin}</td>
                  <td className="border p-2">{item.namaorangtua}</td>
                  <td className="border p-2">{item.nohp}</td>
                  <td className="border p-2 flex justify-center items-center space-x-2">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && !error && (
          <p className="text-center text-gray-500">Tidak ada data siswa tersedia</p>
        )
      )}
    </div>
  );
};

export default DataSiswaPage;
