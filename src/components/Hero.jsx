import { Link } from "react-router-dom"; // Import Link
import halamandepan from "../assets/halamandepan.png"; // Pastikan path gambar sesuai

const Hero = () => {
  return (
    <section className="relative bg-gray-100 text-center py-16">
      <div className="relative w-full h-96 md:h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(${halamandepan})`,
            filter: "blur(4px)",
          }}
        ></div>

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start px-8 md:px-20">
          <div className="text-white text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight animate__animated animate__fadeIn animate__delay-1s">
              Selamat Datang di <br />
              Website TK Unggulan <br />
              Insan Prestasi <br />
              Muaro Jambi
            </h2>

            <p className="text-lg md:text-xl leading-relaxed animate__animated animate__slideInLeft animate__delay-2s">
              Kami sangat senang menyambut Anda di website resmi TK Insan Prestasi. <br />
              Di sini Anda dapat menjelajahi dunia ceria dan penuh warna dari pendidikan anak usia dini.
            </p>

            {/* Tombol dengan Link */}
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transform transition-all duration-300 hover:scale-105">
              <Link to="/pendaftaran" className="text-white">Bergabung Sekarang</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
  