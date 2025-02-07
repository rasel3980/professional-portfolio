const Contact = () => {
    return (
      <section className="py-20 bg-gradient-to-r from-indigo-100 via-blue-200 to-teal-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-0">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-center mb-12">
            Contact Information
          </h2>
  
          <div className="space-y-8 text-center md:text-left">
            {/* First Row: Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email Address */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Email Address</h3>
                <p className="text-lg text-gray-700">
                  <a
                    href="mailto:rkrasel3980@gmail.com"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    rkrasel3980@gmail.com
                  </a>
                </p>
              </div>
  
              {/* Phone Number */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Phone Number</h3>
                <p className="text-lg text-gray-700">
                  <a
                    href="tel:+8801647683980"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    01647683980
                  </a>
                </p>
              </div>
            </div>
  
            {/* Second Row: WhatsApp */}
            <div className="flex justify-center items-center gap-6">
              {/* WhatsApp Number */}
              <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full max-w-sm">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">WhatsApp</h3>
                <p className="text-lg text-gray-700">
                  <a
                    href="https://wa.me/8801647683980"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-700"
                  >
                    01647683980
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  