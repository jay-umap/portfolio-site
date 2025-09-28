import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="group block backdrop-blur-md p-6 rounded-xl shadow-gray-900 
                 hover:shadow-[0_0_15px_rgba(89,130,246,0.2)] 
                 transform transition duration-300 
                 border-gray-400 bg-black/90 
                 shadow-[0_0_55px_rgba(99,130,246,0.2)]"
    >
      {/* Clickable area (image + title + description) */}
      <Link to={`/projects/${project.id}`}>
        {/* Image with hover effect */}
        <div className="overflow-hidden rounded-lg mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg 
                       transform transition duration-300 
                       group-hover:scale-110 
                       group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2 
                       transition-colors duration-300 
                       group-hover:text-blue-400">
          {project.title}
        </h3>

        {/* Description (truncate to 2 lines with ellipsis) */}
        <p className="text-gray-400 line-clamp-2">{project.description}</p>

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
      </Link>

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
    </div>
  );
};

export default ProjectCard;
