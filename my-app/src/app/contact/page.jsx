import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-white ">
      <div className="flex items-center max-w-screen-lg mx-auto w-full p-6 border border-gray-700 rounded-md bg-black shadow-lg animate-fade-in">
        
        {/* Left Column - Contact Info */}
        <h1 className="text-4xl font-bold mb-4 animate-slide-down">Contact Me</h1>
        <div className="flex-1 text-center p-4">
         
          <p className="text-gray-300 mb-6 animate-fade-up">
            If you're looking for a passionate and skilled developer, I'd love to work with you!
          </p>

          <div>
            <p className="text-lg font-semibold text-gray-400 mb-2 animate-fade-up delay-[400ms]">
              You can also reach me through:
            </p>

            {/* Phone Number with Icon */}
            <p className="text-lg text-gray-300 mb-2 animate-slide-left delay-[600ms]">
              <FaPhoneAlt className="inline mr-2 text-green-500" />
              Phone:{" "}
              <a href="tel:+213540305771" className="text-white hover:underline">
                05 40 30 57 71
              </a>
            </p>

            {/* Email with Icon */}
            <p className="text-lg text-gray-300 animate-slide-left delay-[800ms]">
              <FaEnvelope className="inline mr-2 text-red-500" />
              Email:{" "}
              <a
                href="mailto:adelramdani@gmail.com"
                className="text-white hover:underline"
              >
                adelramdani@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1 p-4">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            ></textarea>
            <button className="py-2 px-1.5 w-full bg-white text-black font-bold text-xl hover:bg-gray-200 transition duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
