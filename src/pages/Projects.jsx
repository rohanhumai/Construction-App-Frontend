import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";

export default function Project() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer"
            onClick={() => navigate(`dpr/${project.id}`)}
          >
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-500 text-sm mt-1">
              Start: {project.startDate}
            </p>
            <span className="inline-block mt-3 px-3 py-1 text-sm rounded-xl bg-black text-white">
              {project.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
