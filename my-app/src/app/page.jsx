import Image from 'next/image'; 
import Link from 'next/link';
import 'animate.css'; 

export default function HomePage() {
  return (
    <section className="flex items-center justify-center min-h-screen  text-white py-12">
      <div className="max-w-screen-lg w-full mx-auto px-6 flex flex-row items-center justify-between">
        {/* Left Section: Introduction */}
        <div className="w-1/2 animate__animated animate__fadeIn animate__delay-1s">
          <h1 className="text-3xl font-medium mb-4">
            Hello, Welcome!
          </h1>
          <p className="text-4xl font-extrabold mb-4 animate__animated animate__zoomIn animate__delay-2s">
            I'm RAMDANI Adel-Rayan!
          </p>
          <p className="text-lg text-gray-100 mb-6">
            I'm a 21-year-old full-stack junior web developer from Algeria. I'm passionate about building both the front-end & back-end of web applications. I specialize in technologies like React, Next.js, Node.js, Express, and databases like MongoDB, along with styling frameworks like TailwindCSS.
          </p>
          <p className="text-lg text-gray-100 mb-8">
            My journey started with a fascination for problem-solving and technology. Over time, I honed my skills in both front-end and back-end development, and now I focus on building scalable and high-performance web applications that are both functional and user-friendly.
          </p>
          <Link
            href="/about"
            className="px-6 py-3 bg-white text-black text-lg font-medium rounded-md shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Learn More About Me
          </Link>
        </div>

        {/* Right Section: Photo */}
        <div className="w-1/2 flex justify-center animate__animated animate__fadeIn animate__delay-3s">
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
            alt="Adel Image"
            width={300}
            height={300}
            className="rounded-full shadow-lg border-4 border-gray-300 transform hover:scale-110 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}
