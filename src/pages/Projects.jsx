import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";

export default function Project() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold">Projects</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              className="flex min-h-40 flex-col items-start justify-between rounded-xl border border-black bg-white p-5 text-left shadow transition duration-200 hover:border-gray-400 hover:shadow-lg focus:border-gray-400 focus:outline-none sm:p-6"
              onClick={() => navigate(`dpr/${project.id}`)}
            >
              <div>
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Start: {project.startDate}
                </p>
              </div>
              <span className="inline-block mt-3 px-3 py-1 text-sm rounded-xl bg-black text-white">
                {project.status}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
