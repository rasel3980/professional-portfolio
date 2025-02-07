import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Social = () => {
    return (
        <div>
            <div className="flex space-x-4 justify-center mt-2">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline btn-primary text-lg"
      >
        <FaLinkedin/>
      </a>
      
      {/* GitHub */}
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline btn-accent text-lg"
      >
        <FaGithub/>
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline btn-info text-lg"
      >
        <FaSquareXTwitter/>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline btn-secondary text-lg"
      >
        <FaFacebook/>
      </a>
    </div>
        </div>
    );
};

export default Social;