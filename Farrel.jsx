function Farrel() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-2xl w-[400px] overflow-hidden">
        
        {/* Header Background */}
        <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500"></div>

        {/* Foto Profile */}
        <div className="flex justify-center -mt-16">
          <img
            src="/farrel.jpg"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Nama */}
        <div className="text-center mt-4 px-6">
          <h1 className="text-2xl font-bold">Farrel Aubrey Rizqullah</h1>
          <p className="text-gray-500">Web Developer | UI Designer</p>
        </div>

        {/* Info */}
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Kelas: TI-2A</p>
          <p>Prodi: Teknologi Informasi</p>
          <p>Domisili: Sidoarjo</p>
        </div>

        {/* About */}
        <div className="mt-4 px-6 text-justify text-sm text-gray-600">
          <p>
            Farrel mulai tertarik dengan dunia IT sejak kecil karena ia sangat suka bermain komputer dan selalu penasaran bagaimana cara membuat sebuah aplikasi dan website. Rasa penasaran itu membuat Farrel mulai belajar secara otodidak melalui internet, seperti menonton video tutorial dan membaca artikel tentang pemrograman dan desain. Seiring waktu, Farrel mulai memahami dasar-dasar HTML, CSS, dan JavaScript, lalu mencoba membuat website sederhana. Dari pengalaman tersebut, Farrel semakin tertarik untuk menjadi seorang Web Developer dan UI Designer.
          </p>
        </div>

        {/* Skill */}
        <div className="mt-6 px-6">
          <h2 className="font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs">HTML</span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs">CSS</span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs">JavaScript</span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs">React</span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs">Tailwind</span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs">Figma</span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6 mb-6 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow">
            Contact Me
          </button>
        </div>

      </div>
    </div>
  );
}

export default Farrel;