export default function DataDiriJillsya() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center">

        {/* FOTO */}
        <div className="w-36 h-36 mx-auto rounded-full overflow-hidden mb-4">
          <img
            src="/jillsya.jpg"
            alt="foto"
            className="w-full h-full object-cover"
          />
        </div>

        {/* NAMA */}
        <h1 className="text-2xl font-bold mb-2 text-gray-800">
          Jillsya Ginta Naumira
        </h1>

        {/* DATA */}
        <p className="text-gray-700">Kelas: T2C</p>
        <p className="text-gray-700">Prodi: Teknologi Informasi</p>
        <p className="text-gray-700">Domisili: Jawa Timur</p>


        {/* DESKRIPSI */}
        <p className="mt-4 text-sm text-gray-700 text-justify leading-relaxed">
          (Saya adalah seorang mahasiswa yang memiliki minat dalam bidang teknologi, khususnya pengembangan web. Saya senang mempelajari hal-hal baru dan terus berusaha meningkatkan kemampuan saya dalam pemrograman. Saat ini saya sedang belajar React dan Git untuk mendukung pengembangan aplikasi modern. Saya juga tertarik dalam desain antarmuka agar aplikasi yang dibuat tidak hanya berfungsi dengan baik tetapi juga nyaman digunakan. Ke depan, saya ingin menjadi seorang developer yang profesional dan mampu berkontribusi dalam proyek-proyek besar serta bekerja dalam tim secara efektif.)
        </p>

      </div>

    </div>
  );
}
