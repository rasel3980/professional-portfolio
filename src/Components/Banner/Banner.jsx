const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="w-11/12 mx-auto hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Hello! I’m Rasel</h1>
          <p className="py-6">
           A passionate and driven [Your Professional Title: e.g., Frontend Developer, Full Stack Developer, Web Developer] based in [Your Location]. My journey in the world of development began with a fascination for how websites and applications come to life. Since then, I’ve honed my skills in [mention key technologies you use, e.g., JavaScript, React, Node.js, MongoDB, etc.], and I’m constantly learning new tools and technologies to stay ahead of the curve.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
