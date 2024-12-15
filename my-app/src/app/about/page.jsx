import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJsSquare, FaWind } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb } from 'react-icons/si';

export default () => {
  return (
    <section className="p-6 max-w-screen-lg mx-auto  text-white min-h-screen flex flex-col items-center">
      {/* About Me Section */}
      <div className="w-full text-left mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold text-white mb-8 underline">About Me</h1>
        <p className="text-lg text-gray-300">
          Hi, I'm RAMDANI Adel-Rayan, a passionate web developer from Algeria.
          I have a strong foundation in front-end development and I'm always eager to learn new technologies.
        </p>

        {/* Decorative Line */}
        <div className="border-t-4 border-gray-700 my-4 w-1/4"></div>

        <h2 className="text-2xl font-semibold text-white mt-8 underline">About My Journey</h2>
        <p className="text-gray-400 mt-2">
          I studied at GoMyCode Algeria, where I built a solid foundation in web development. I love using tools like React and MongoDB to turn ideas into impactful, real-world projects.
        </p>
      </div>

      {/* Separator Line */}
      <div className="border-t-2 border-gray-700 w-full my-8"></div>

      {/* Skills Section */}
      <div className="w-full grid grid-cols-2 gap-8">
        {/* Skill Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 border border-gray-600">
          <FaHtml5 className="text-6xl text-orange-500 mb-4" />
          <h2 className="text-xl font-semibold text-white">HTML</h2>
          <p className="text-gray-400 mt-2">
            Building semantic, well-structured web pages using modern HTML5 standards.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 border border-gray-600">
          <FaCss3Alt className="text-6xl text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold text-white">CSS</h2>
          <p className="text-gray-400 mt-2">
            Creating responsive layouts and animations using CSS3 .
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 border border-gray-600">
          <FaReact className="text-6xl text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold text-white">React</h2>
          <p className="text-gray-400 mt-2">
            Building dynamic, interactive user interfaces using React.js.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 border border-gray-600">
          <FaJsSquare className="text-6xl text-yellow-500 mb-4" />
          <h2 className="text-xl font-semibold text-white">JavaScript</h2>
          <p className="text-gray-400 mt-2">
            Writing efficient JavaScript code with ES6+ features and async programming.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 border border-gray-600">
          <FaNodeJs className="text-6xl text-green-500 mb-4" />
          <h2 className="text-xl font-semibold text-white">Node.js</h2>
          <p className="text-gray-400 mt-2">
            Creating backend services and APIs with Node.js and Express.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 border border-gray-600">
          <SiNextdotjs className="text-6xl text-white mb-4" />
          <h2 className="text-xl font-semibold text-white">Next.js</h2>
          <p className="text-gray-400 mt-2">
            Building websites using Next.js and dynamic routing.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 border border-gray-600">
          <SiMongodb className="text-6xl text-green-600 mb-4" />
          <h2 className="text-xl font-semibold text-white">MongoDB</h2>
          <p className="text-gray-400 mt-2">
            Working with MongoDB for NoSQL database management.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 border border-gray-600">
          <FaWind className="text-6xl text-cyan-500 mb-4" />
          <h2 className="text-xl font-semibold text-white">Tailwind CSS</h2>
          <p className="text-gray-400 mt-2">
            Building responsive and utility-first user interfaces using Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
