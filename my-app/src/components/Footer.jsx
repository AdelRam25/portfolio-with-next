import Link from "next/link";

export default () => {
  return (
    <div className="flex flex-col">


      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-900 border-t border-white text-white text-center py-4">
        <div >
          <p className="mb-4">&copy; 2024 | All Rights Reserved</p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition duration-200"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
