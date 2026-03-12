import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";

export default function Project() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-200 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-2 sm:mb-8">
          <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Projects
          </h1>
          <p className="max-w-2xl text-sm text-gray-600 sm:text-base">
            Select a project to view and submit its daily progress report.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              className="rounded-2xl bg-white p-5 text-left shadow transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black sm:p-6"
              onClick={() => navigate(`dpr/${project.id}`)}
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-semibold sm:text-xl">
                  {project.name}
                </h2>
                <span className="shrink-0 rounded-xl bg-black px-3 py-1 text-xs text-white sm:text-sm">
                  {project.status}
                </span>
              </div>

              <p className="mt-3 text-sm text-gray-500 sm:text-base">
                Start: {project.startDate}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
