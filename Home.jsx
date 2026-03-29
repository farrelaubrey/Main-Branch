import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-8">
        
        {/* Farrel */}
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <img
            src="farrel.jpg"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="mt-4 font-bold text-xl">Farrel Aubrey</h2>
          <Link to="/farrel">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
              Lihat Profil
            </button>
          </Link>
        </div>

        {/* Jillsya */}
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <img
            src="jillsya.jpg"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="mt-4 font-bold text-xl">Jillsya</h2>
          <Link to="/jillsya">
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg">
              Lihat Profil
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;