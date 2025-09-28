import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projectsData";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="p-10 text-center text-xl">
        Project not found.{" "}
        <Link to="/projects" className="text-blue-500 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <section className="p-10 max-w-5xl mx-auto">
      {/* Main image */}
      <img
        // src={project.image}
        alt=""
        className="rounded-xl mb-6 shadow-lg w-full"
      />

      {/* Title + description */}
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-8">{project.description}</p>

      {/* More images masonry grid */}
      {project.moreImages && project.moreImages.length > 0 && (
        <div className="mb-8">
          <h5 className="text-2xl font-semibold mb-4">Visual Insights</h5>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 h-full">
            {project.moreImages.slice(0, 5).map((img, index) => {
              let colSpanClass = "";
              if (index === 2 || index === 5) colSpanClass = "col-span-2";
              return (
                <div
                  key={index}
                  className={`${colSpanClass} overflow-hidden rounded-lg shadow-md`}
                >
                  <img
                    src={img}
                    alt={`${project.title} extra ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

            {/* Tech Stack */}
      {project.tech && (
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs rounded-md bg-blue-500/10 text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

            {/* Links (GitHub + Live Demo) */}
      <div className="flex gap-3 mt-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-md bg-green-600/20 text-green-400 text-sm 
                       hover:bg-green-600/30 transition"
          >
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-md bg-gray-600/20 text-gray-300 text-sm 
                       hover:bg-gray-600/30 transition"
          >
            GitHub
          </a>
        )}
      </div>

      {/* Back button */}
      <Link
        to="/projects"
        className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      >
        Back to Projects
      </Link>


      <h6 className="text-center text-gray-400 text-sm mt-10">© 2025 Jay Umap. All rights reserved.</h6>
    </section>
  );
};

export default ProjectDetails;
