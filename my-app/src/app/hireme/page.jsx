export default function HireMe() {
  return (
    <section className="p-10 bg-gray-900 text-white flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div
        className="w-[800px] p-8 border border-gray-700 rounded-lg bg-black shadow-lg text-center"
        style={{ minHeight: '700px' }}
      >
        {/*  my skills */}
        <h2 className="text-3xl font-semibold mb-6 underline">Skills</h2>
        <div className="mb-10">
          {[{
            skill: 'HTML',
            color: 'bg-orange-500',
            level: '100%',
          },
          {
            skill: 'Tailwind',
            color: 'bg-blue-500',
            level: '90%',
          },
          {
            skill: 'JavaScript',
            color: 'bg-yellow-500',
            level: '88%',
          },
          {
            skill: 'React',
            color: 'bg-cyan-400',
            level: '92%',
          },
          {
            skill: 'Node.js',
            color: 'bg-green-500',
            level: '80%',
          },
          {
            skill: 'Next.js',
            color: 'bg-white',
            level: '80%',
          }].map(({ skill, color, level }) => (
            <div key={skill} className="mb-4 text-left">
              <p className="text-lg font-medium flex justify-between">
                <span>{skill}</span>
                <span>{level}</span>
              </p>
              <div className="w-full bg-gray-800 h-2 rounded-md">
                <div className={`h-2 rounded-md ${color}`} style={{ width: level }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <h2 className="text-3xl font-semibold mb-6 underline">Projects</h2>
        <p className="text-lg text-gray-300 mb-10">
          I created a <span className="font-bold text-cyan-400">Pet Store</span> using React for the front end and MongoDB for the back end. This project included features like:
        </p>
        <ul className="list-disc pl-6 text-gray-300 mb-10 text-left">
          <li>Dynamic product listings with real-time updates.</li>
          <li>Secure user authentication and shopping cart functionality.</li>
          <li>Admin dashboard for managing products and orders.</li>
        </ul>

        {/* Experience Section */}
        <h2 className="text-3xl font-semibold mb-6 underline">Experience</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-10 text-left">
          <li>Built a portfolio website using React and Next.js.</li>
          <li>Created a task management app with Node.js and MongoDB.</li>
        </ul>

        {/* Hamid's Testimonials Section */}
        <h2 className="text-3xl font-semibold mb-6 underline">Testimonials</h2>
        <div className="bg-gray-800 p-6 rounded-lg mb-10">
          <div className="flex items-center mb-4">
            <img
              src="https://images.unsplash.com/photo-1668607680147-2041b1201d69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwbWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
              alt="Hamid"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-md text-gray-300 italic">
                "Adel Rayan is an incredibly talented developer. His work exceeded my expectations!"
              </p>
              <p className="text-sm text-gray-400">- Hamid -</p>
            </div>
          </div>
        </div>


        <div className="mt-10">
          <a href="mailto:adelrayan@example.com">
            <button className="bg-white w-full text-black px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-gray-500">
              Hire Me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
