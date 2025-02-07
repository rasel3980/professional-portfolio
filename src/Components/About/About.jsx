const About = () => {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Image */}
          <div className="md:w-1/3">
            <img
              src="https://via.placeholder.com/300" // Replace with your photo
              alt="Your Name"
              className="rounded-full shadow-xl w-48 h-48 mx-auto md:mx-0"
            />
          </div>

          {/* About Text */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-center md:text-left text-primary">
              About Me
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Hi, I’m <strong>[Your Name]</strong>, a passionate{" "}
              <strong>[Your Title]</strong> from
              <strong> [Your Location]</strong>. My journey into the world of
              web development began with a fascination for coding and
              problem-solving. Over the years, I have developed a deep
              understanding of{" "}
              <strong>
                [List Technologies, e.g., React, Node.js, JavaScript]
              </strong>
              and strive to create clean, efficient, and user-friendly
              applications.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              When I’m not coding, I enjoy{" "}
              <strong>
                [Your Hobbies, e.g., hiking, photography, reading]
              </strong>
              . I believe in continuous learning, and I always seek new
              challenges to grow as a developer.
            </p>

            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href="#projects"
                className="btn btn-outline btn-primary text-lg"
              >
                Check Out My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
