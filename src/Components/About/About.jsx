const About = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 via-purple-200 to-pink-300">
      <div className="max-w-5xl mx-auto px-6 lg:px-0">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-center mb-6">
          About Me
        </h2>
        <div className="lg:w-full text-lg text-gray-800 leading-relaxed">
          <p className="mb-6">
            My programming journey began with a curiosity about how websites and applications work. Growing up, I was always fascinated by the design and interactivity of websites but didn’t quite understand the process behind it. This curiosity led me to learn <strong>HTML</strong> and <strong>CSS</strong> to build simple static pages.
          </p>

          <p className="mb-6">
            As I dove deeper into web development, I discovered the power of <strong>JavaScript</strong>. It opened up a whole new world of possibilities—dynamic, interactive elements that made websites come to life. Realizing that I could build applications that users could engage with in real-time, I knew this was what I wanted to do.
          </p>

          <p className="mb-6">
            My journey continued as I explored frameworks and libraries like <strong>React</strong> and <strong>Node.js</strong>, which allowed me to build more complex, scalable applications. React’s component-based architecture transformed the way I thought about development, and Node.js empowered me to build server-side solutions using JavaScript.
          </p>

          <p className="mb-6">
            Over time, my passion for back-end technologies grew, and I began working with <strong>Express.js</strong> to create RESTful APIs and <strong>MongoDB</strong> to manage databases. This solidified my understanding of full-stack development and how both the front-end and back-end come together to create cohesive, scalable applications.
          </p>

          <p className="mb-6">
            Today, I’m constantly pushing myself to learn new technologies and stay ahead of trends in the ever-evolving world of web development. For me, programming is about more than just writing code—it’s about solving real-world problems, creating meaningful digital experiences, and growing every day as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
