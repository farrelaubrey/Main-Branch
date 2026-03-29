import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between">
        <h1 className="font-bold">Website Profile</h1>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;