export default function DataDiriihsan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-2xl p-6 max-w-sm w-full text-center text-white">
        
        {/* Foto */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          <img
            src="/ihsan.jpg"
            alt="foto"
            className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>

        {/* Nama */}
        <h1 className="text-2xl font-bold">Ihsan</h1>
        <p className="text-sm opacity-80 mb-4">Mahasiswa TI</p>

        {/* Info */}
        <div className="bg-white/10 rounded-lg p-4 text-sm space-y-2 backdrop-blur-md">
          <p><span className="font-semibold">Kelas:</span> T2C</p>
          <p><span className="font-semibold">Prodi:</span> Teknologi Informasi</p>
          <p><span className="font-semibold">Domisili:</span> Jawa Timur</p>
        </div>

        {/* Deskripsi */}
        <p className="mt-4 text-sm leading-relaxed text-justify">
          Saya adalah mahasiswa yang memiliki minat dalam pengembangan web,
          khususnya React dan UI/UX. Saya terus belajar untuk meningkatkan skill
          dan siap berkontribusi dalam proyek tim.
        </p>

        {/* Button */}
        <button className="mt-6 px-4 py-2 bg-white text-purple-600 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
          Hubungi Saya
        </button>

      </div>

    </div>
  );
}