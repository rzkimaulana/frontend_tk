import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import GalleryPage from "./pages/GalleryPage";
import FAQPage from "./pages/FAQPage";
import RegistrationPage from "./pages/RegistrationPage";
import DatasiswaPage from "./pages/datasiswaPage";
import AdminPage from "./pages/AdminPage";
import EditSiswaPage from "./pages/editsiswaPage";
import PropTypes from "prop-types";

// Komponen Layout Utama untuk memeriksa rute
const Layout = ({ children }) => {
  const location = useLocation();

  // Periksa apakah rute saat ini adalah "/admin" atau sub-rutenya
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Header />} {/* Tampilkan Header jika bukan halaman admin */}
      <main>{children}</main>
      {!isAdminPage && <Footer />} {/* Tampilkan Footer jika bukan halaman admin */}
    </>
  );
};

// Validasi props untuk komponen Layout
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang" element={<ProfilePage />} />
            <Route path="/galeri" element={<GalleryPage />} />
            <Route path="/pertanyaan" element={<FAQPage />} />
            <Route path="/pendaftaran" element={<RegistrationPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/datasiswa" element={<DatasiswaPage />} />
            <Route path="/edit-siswa/:id" element={<EditSiswaPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
