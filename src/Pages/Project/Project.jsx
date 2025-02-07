import React from 'react';

const Project = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-100 via-blue-200 to-teal-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-center mb-12">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
            <img
              src="https://via.placeholder.com/400x300"
              alt=""
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              </h3>
              <p className="text-gray-600 mb-4"></p>
              
              <div className="flex justify-between items-center">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Live
                </a>

                <a
                  href="#project1-details"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
            <img
              src="https://via.placeholder.com/400x300"
              alt=""
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              </h3>
              <p className="text-gray-600 mb-4"></p>

              <div className="flex justify-between items-center">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Live
                </a>

                <a
                  href="#project2-details"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
            <img
              src="https://via.placeholder.com/400x300"
              alt=""
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              </h3>
              <p className="text-gray-600 mb-4"></p>

              <div className="flex justify-between items-center">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Live
                </a>

                <a
                  href="#project3-details"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Project;
