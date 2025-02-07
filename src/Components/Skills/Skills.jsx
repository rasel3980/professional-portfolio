const Skills = () => {
    return (
      <section className="py-20 bg-gradient-to-r from-indigo-100 via-blue-200 to-teal-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-0">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-center mb-12">
            My Skillset
          </h2>
  
          {/* Skill Sections: Frontend, Backend, Tools */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
            {/* Frontend Skills */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Frontend Development</h3>
              <div className="flex flex-wrap gap-6 justify-center">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-medium text-gray-700">HTML5</span>
                  <div
                    className="radial-progress bg-primary text-primary-content border-primary border-4"
                    style={{ "--value": 70 }}
                    role="progressbar"
                  >
                    70%
                  </div>
                </div>
  
                <div className="flex flex-col items-center">
                  <span className="text-xl font-medium text-gray-700">CSS3</span>
                  <div
                    className="radial-progress bg-primary text-primary-content border-primary border-4"
                    style={{ "--value": 85 }}
                    role="progressbar"
                  >
                    85%
                  </div>
                </div>
  
                <div className="flex flex-col items-center">
                  <span className="text-xl font-medium text-gray-700">JavaScript</span>
                  <div
                    className="radial-progress bg-primary text-primary-content border-primary border-4"
                    style={{ "--value": 80 }}
                    role="progressbar"
                  >
                    80%
                  </div>
                </div>
  
                <div className="flex flex-col items-center">
                  <span className="text-xl font-medium text-gray-700">React</span>
                  <div
                    className="radial-progress bg-primary text-primary-content border-primary border-4"
                    style={{ "--value": 85 }}
                    role="progressbar"
                  >
                    85%
                  </div>
                </div>
              </div>
            </div>
  
            {/* Backend Skills */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Backend Development</h3>
              <div className="flex flex-wrap gap-6 justify-center">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-medium text-gray-700">Node.js</span>
                  <div
                    className="radial-progress bg-teal-500 text-teal-50 border-teal-500 border-4"
                    style={{ "--value": 75 }}
                    role="progressbar"
                  >
                    75%
                  </div>
                </div>
  
                <div className="flex flex-col items-center">
                  <span className="text-xl font-medium text-gray-700">Express.js</span>
                  <div
                    className="radial-progress bg-teal-500 text-teal-50 border-teal-500 border-4"
                    style={{ "--value": 70 }}
                    role="progressbar"
                  >
                    70%
                  </div>
                </div>
  
                <div className="flex flex-col items-center">
                  <span className="text-xl font-medium text-gray-700">MongoDB</span>
                  <div
                    className="radial-progress bg-teal-500 text-teal-50 border-teal-500 border-4"
                    style={{ "--value": 80 }}
                    role="progressbar"
                  >
                    80%
                  </div>
                </div>
              </div>
            </div>
  
            {/* Tools & Technologies */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-6 justify-center">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-medium text-gray-700">Git</span>
                  <div
                    className="radial-progress bg-yellow-500 text-yellow-50 border-yellow-500 border-4"
                    style={{ "--value": 90 }}
                    role="progressbar"
                  >
                    90%
                  </div>
                </div>
  
                <div className="flex flex-col items-center">
                  <span className="text-xl font-medium text-gray-700">VS Code</span>
                  <div
                    className="radial-progress bg-yellow-500 text-yellow-50 border-yellow-500 border-4"
                    style={{ "--value": 95 }}
                    role="progressbar"
                  >
                    95%
                  </div>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  