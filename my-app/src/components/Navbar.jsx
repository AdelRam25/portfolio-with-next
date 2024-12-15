import Link from "next/link";

export default () => {
  return (
    <div>
      <header>
        <nav className="bg-gradient-to-b from-gray-900 via-black to-gray-900 border-b mb-5 border-white p-6">
          <div className="max-w-screen-lg mx-auto flex justify-between items-center">
            {/* Portfoloi */}
            <div className="flex items-center gap-3 hover:scale-105 transition-transform text-white text-4xl font-bold  duration-300">
             <h1>Portfolio</h1>
            </div>

            {/* Navigation Links*/}
            <div className="flex gap-12 text-lg font-semibold">
              <Link
                href="/"
                className="text-white hover:text-gray-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500"></span>
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-gray-300 relative group"
              >
                About me
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500"></span>
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-gray-300 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500"></span>
              </Link>

            </div>
          
            <div className="flex items-center gap-4">
              <Link
                href="/hireme"
                className="px-6 py-2 bg-white font-semibold text-black text-lg rounded-md hover:bg-gray-100 transition duration-300 transform hover:scale-105"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
