const Education = () => {
    return (
      <section className="py-20 bg-gradient-to-r from-indigo-100 via-blue-200 to-teal-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-0">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-center mb-12">
            My Educational Qualifications
          </h2>
  
          {/* Education Details */}
          <div className="space-y-12">
            {/* Diploma in Computer Science */}
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-10">
              <div className="md:w-3/4">
                <h3 className="text-3xl font-bold text-gray-800">Diploma in Computer Science (7th Semester)</h3>
                <p className="text-lg text-gray-700">ABC Polytechnic</p>
                <p className="text-sm text-gray-500">2021 - Present</p>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                  <li>Currently in the 7th semester, with a focus on **Web Development** and **Software Engineering**.</li>
                  <li>Gaining hands-on experience with programming languages like Java, JavaScript,C etc.</li>
                  <li>Hands-on experience with building dynamic websites, responsive designs, and interactive web applications.</li>
                  <li>Completed projects using full-stack development techniques, focusing on front-end and back-end integration.</li>
                  <li>Currently working on personal web development projects using **React** for front-end and **Node.js** for back-end.</li>
                </ul>
              </div>
            </div>
  
            {/* Secondary School Certificate (SSC) */}
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 mb-10">
              <div className="md:w-3/4">
                <h3 className="text-3xl font-bold text-gray-800">Secondary School Certificate (SSC)</h3>
                <p className="text-lg text-gray-700">DEF Secondary School</p>
                <p className="text-sm text-gray-500">2018 - 2019</p>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                  <li>Major Subjects: **Mathematics**, **English**, and **Science**.</li>
                  <li>Achieved an overall score of 90%, with a strong understanding of logical reasoning and mathematics.</li>
                  <li>Involved in extracurricular activities like coding competitions and school website development projects.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Education;
  