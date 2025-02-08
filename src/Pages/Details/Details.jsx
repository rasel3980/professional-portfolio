import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const [project, setProject] = useState(null); // State for storing project data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // State for error handling

  // Fetch the project details based on ID
  useEffect(() => {
    // Fetch the project data from a local JSON file or an API endpoint
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load project data");
        }
        return response.json();
      })
      .then((data) => {
        const foundProject = data.find((project) => project.id === parseInt(id)); // Find project by ID
        if (!foundProject) {
          throw new Error("Project not found");
        }
        setProject(foundProject);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  // While loading, show a spinner or loading message
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader text-xl text-blue-600">Loading...</div> {/* You can add a spinner here */}
      </div>
    );
  }

  // If there's an error, show an error message
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  // If no project is found, show a 404 page or message
  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-500 text-xl">Project not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">{project.name}</h1>
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-96 object-cover rounded-lg shadow-xl mb-6"
      />
      <div className="space-y-6">
        {/* Technologies Used */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Technologies Used</h3>
          <p className="text-gray-600">{project.technologies.join(", ")}</p>
        </section>

        {/* Project Description */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Description</h3>
          <p className="text-gray-600">{project.description}</p>
        </section>

        {/* Challenges Faced */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Challenges Faced</h3>
          <p className="text-gray-600">{project.challenges}</p>
        </section>

        {/* Future Improvements */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Future Improvements</h3>
          <p className="text-gray-600">{project.improvements}</p>
        </section>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            View Live
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-200"
          >
            View GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
